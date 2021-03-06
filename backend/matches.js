
const { ObjectId } = require('mongodb')
const { parseAdminProps } = require('./util')

function matchId(match) {
    match.id = match._id
}

function parseMatch(match) {
    if (match.end_time === '') {
        match.end_time = null
    }
    if (match.start_time) {
        match.start_time = new Date(match.start_time)
    }
    if (match.end_time) {
        match.end_time = new Date(match.end_time)
    }
    return match
}

const listMatches = async (req, res) => {
    const { start, end, order, sort } = parseAdminProps(req.query)
    
    try {
        const matches = await req.db.collection('matches').find()
            .skip(start)
            .limit(end - start)
            .sort({ [sort] : order })
            .toArray()
        matches.forEach(matchId)
        const count = await req.db.collection('matches').countDocuments()
        res.header('X-Total-Count' , count);
        return res.status(200).json(matches)
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
}

const readMatch = async (req, res) => {
    const { id } = req.params
    try {
        const match = await req.db.collection('matches').findOne({ '_id': ObjectId(id) })
        matchId(match)
        if (match) {
            return res.status(200).json(match)
        }
        return res.status(404).send()
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
}

const createMatch = async (req, res) => {
    delete req.body.id
    delete req.body._id
    try {
        const match = parseMatch(req.body)
        const result = await req.db.collection('matches').insertOne(match)
        const newMatch = await req.db.collection('matches').findOne({ _id: ObjectId(result.insertedId) })
        matchId(newMatch)
        return res.status(201).json(newMatch)
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
}

const updateMatch = async (req, res) => {
    const { id } = req.params
    const query = { '_id': ObjectId(id) }
    delete req.body.id
    delete req.body._id
    try {
        const match = parseMatch(req.body)
        const updated = await req.db.collection('matches').updateOne(query, { '$set': match })
        const result = await req.db.collection('matches').findOne(query)
        result.id = result._id
        return res.status(200).json(result)
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
}

const deleteMatch = async (req, res) => {
    const { id } = req.params
    const query = { '_id': ObjectId(id) }
    try {
        const match = await req.db.collection('matches').findOne(query)
        if (match) {
            const result = await req.db.collection('matches').removeOne(query)
            if (result.result.ok) {
                return res.status(204).send({})
            }
            return res.send(500)
        }
        return res.status(404).send()
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
}

module.exports = {
    listMatches,
    createMatch,
    readMatch,
    updateMatch,
    deleteMatch
}
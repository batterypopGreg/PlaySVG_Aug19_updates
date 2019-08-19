
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
        console.warn(e)
        return res.status(500).json(e)
    }
}

const readMatch = async (req, res) => {
    const { id } = req.params
    try {
        const match = await req.db.collection('matches').findOne({ '_id': ObjectId(id), archived: {'$ne': true } })
        console.warn('the match', id, match)
        matchId(match)
        console.warn('match', match)
        // console.warn('thematch', match)
        if (match) {
            return res.status(200).json(match)
        }
        return res.status(404).send()
    } catch(e) {
        return res.status(500).json(e)
    }
}

const createMatch = async (req, res) => {
    //console.warn(req.body)
    const newMatch = req.body
    delete req.body.id
    delete req.body._id
    try {
        const match = parseMatch(req.body)
        const result = await req.db.collection('matches').insertOne(match)
        matchId(result)
        return res.status(204).json(result)
    } catch(e) {
        console.warn(e)
        return res.status(500).json(e)
    }
}

const updateMatch = async (req, res) => {
    const { id } = req.params
    const query = { '_id': ObjectId(id) }
    delete req.body.id
    delete req.body._id
    // console.warn(query, req.body)
    try {
        const match = parseMatch(req.body)
        const updated = await req.db.collection('matches').updateOne(query, { '$set': match })
        const result = await req.db.collection('matches').findOne(query)
        result.id = result._id
        return res.status(200).json(result)
    } catch(e) {
        console.warn(e)
        return res.status(500).json(e)
    }
    return res.send(200)
}

const deleteMatch = async (req, res) => {
    // Does not actually delete, merely sets "archived" flag
    const { id } = req.params
    const query = { '_id': ObjectId(id), archived: {'$ne': true } }
    try {
        const match = await req.db.collection('matches').findOne(query)
        if (match) {
            const newVals = await req.db.collection('matches').update(query, { archived: true })
            console.warn(newVals)
            return res.ok()
        }
        return res.status(404).send()
    } catch(e) {
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
const { ObjectId } = require('mongodb')
const { parseAdminProps } = require('./util')

// Route handlers for Reaction CRUD
function reactionId(r) {
    r.id = r._id
}

const listReactions = async (req, res) => {
    const { start, end, order, sort } = parseAdminProps(req.query)

    try {
        const matches = await req.db.collection('reactions').find()
            .skip(start)
            .limit(end - start)
            .sort({ [sort] : order })
            .toArray()
        matches.forEach(reactionId)
        const count = await req.db.collection('reactions').countDocuments()
        res.header('X-Total-Count' , count);
        return res.status(200).json(matches)
    } catch(e) {
        console.warn(e)
        return res.status(500).json(e)
    }
}

const readReaction = async (req, res) => {
    const { id } = req.params
    try {
        const match = await req.db.collection('reactions').findOne({ '_id': ObjectId(id), archived: {'$ne': true } })
        reactionId(match)
        if (match) {
            return res.status(200).json(match)
        }
        return res.status(404).send()
    } catch(e) {
        console.warn(e)
        return res.status(500).json({error: e})
    }
}

const createReaction = async (req, res) => {
    //console.warn(req.body)
    const newReaction = req.body
    delete req.body.id
    delete req.body._id
    try {
        const result = await req.db.collection('reactions').insertOne(req.body)
        reactionId(result)
        return res.status(204).json(result)
    } catch(e) {
        console.warn(e)
        return res.status(500).json(e)
    }
}

const updateReaction = async (req, res) => {
    const { id } = req.params
    const query = { '_id': ObjectId(id) }
    delete req.body.id
    delete req.body._id
    try {
        const updated = await req.db.collection('reactions').update(query, { '$set': req.body })
        const result = await req.db.collection('reactions').findOne(query)
        result.id = result._id
        return res.status(200).json(result)
    } catch(e) {
        console.error(e)
        return res.status(500).json(e)
    }
    return res.send(200)
}

const deleteReaction = async (req, res) => {
    // Does not actually delete, merely sets "archived" flag
    const { id } = req.params
    const query = { '_id': ObjectId(id), archived: {'$ne': true } }
    try {
        const match = await req.db.collection('reactions').findOne(query)
        if (match) {
            const newVals = await req.db.collection('reactions').update(query, { '$set': { archived: true } })
            console.warn(newVals)
            return res.ok()
        }
        return res.status(404).send()
    } catch(e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    listReactions,
    createReaction,
    readReaction,
    updateReaction,
    deleteReaction
}
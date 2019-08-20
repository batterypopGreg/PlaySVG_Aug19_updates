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
        console.error(e)
        return res.status(500).json(e)
    }
}

const readReaction = async (req, res) => {
    const { id } = req.params
    try {
        const match = await req.db.collection('reactions').findOne({ '_id': ObjectId(id) })
        reactionId(match)
        if (match) {
            return res.status(200).json(match)
        }
        return res.status(404).send()
    } catch(e) {
        console.error(e)
        return res.status(500).json({error: e})
    }
}

const createReaction = async (req, res) => {
    delete req.body.id
    delete req.body._id
    try {
        const result = await req.db.collection('reactions').insertOne(req.body)
        const newReaction = await req.db.collection('reactions').findOne({ _id: ObjectId(result.insertedId) })
        reactionId(newReaction)
        return res.status(201).json(newReaction)
    } catch(e) {
        console.error(e)
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
    const { id } = req.params
    const query = { '_id': ObjectId(id) }
    try {
        const match = await req.db.collection('reactions').findOne(query)
        if (match) {
            const result = await req.db.collection('reactions').removeOne(query)
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
    listReactions,
    createReaction,
    readReaction,
    updateReaction,
    deleteReaction
}
require('dotenv').config({
    debug: process.env.DEBUG
})
const path = require('path')
const express = require("express")
const { MongoClient, ObjectId } = require('mongodb')
const bodyParser = require("body-parser")
const cors = require('cors')

const { login } = require('./backend/auth')
const { listReactions, createReaction, readReaction, updateReaction, deleteReaction } = require('./backend/reactions')
const { listMatches, createMatch, readMatch, updateMatch, deleteMatch } = require('./backend/matches')

const port = process.env.BACKEND_PORT || 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    exposedHeaders: ['Content-Length', 'X-Total-Count'],
}))

// DB Config
const dbURL = process.env.MONGO_URL || 'mongodb://localhost:27017'
const database = process.env.DATABASE || 'development'
MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    // Declare middleware here, attach to req obj
    app.use((req, res, next) => {
        req.db = client.db(database)
        next()
    })

    // Auth routes
    app.route('/auth')
    .post(login)

    // Match routes
    app.route('/matches')
    .get(listMatches)
    .post(createMatch)

    app.route('/matches/:id')
    .get(readMatch)
    .put(updateMatch)
    .delete(deleteMatch)

    // Reaction routes
    app.route('/reactions')
    .get(listReactions)
    .post(createReaction)

    app.route('/reactions/:id')
    .get(readReaction)
    .put(updateReaction)
    .delete(deleteReaction)

    // Static asset routes
    app.use(express.static(path.join(__dirname, 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'))
    })
})

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
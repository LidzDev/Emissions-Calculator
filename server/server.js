const express = require('express')
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://127.0.0.1:27017')
    .then((client) => {
        const db = client.db('emissions')
        const transportCollection = db.collection('transport')
        const transportRouter = createRouter(transportCollection)
        app.use('/api/modes', transportRouter)
    })
    .catch(console.error)

app.listen(9000, function() {
    console.log(`Emissions Calculator server running on port ${this.address().port}`);
    });
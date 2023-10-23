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
        const tripCollection = db.collection('trips')
        const tripRouter = createRouter(tripCollection)
        const employeeCollection = db.collection('employees')
        const employeeRouter = createRouter(employeeCollection)
        const businessCollection = db.collection('business')
        const businessRouter = createRouter(businessCollection)
        app.use('/api/modes', transportRouter)
        app.use('/api/employees', employeeRouter)
        app.use('/api/business', businessRouter)
        app.use('/api/trips', tripRouter)
    })
    .catch(console.error)

app.listen(9000, function() {
    console.log(`Emissions Calculator server running on port ${this.address().port}`);
    });
const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

    router.get('/total-emissions', async (req, res) => {
        await collection.aggregate([
            {
                $group: {
                    _id: null,
                    totalEmissions: { $sum: "$emissions" }
                }
            }
        ])
            .toArray()
            .then(totalEmissions => {
                res.json({ totalEmissions : totalEmissions[0].totalEmissions });
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ status: 500, error });
            });
        })

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: new ObjectId(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .deleteOne({ _id: new ObjectId(id) })
            .then(() => collection.find().toArray())
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });
    router.post('/', (req, res) => {
        const newData = req.body
        console.log({newData})
        collection
            .insertOne(newData)
            .then((result) => {
                console.log({ result })
                res.json(newData)
            })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body
        delete updatedData._id
        console.log(updatedData)
        collection
            .updateOne({ _id: new ObjectId(id) }, { $set: updatedData })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

        // return router


    return router

}

module.exports = createRouter;
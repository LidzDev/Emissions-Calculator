use emissions
db.dropDatabase()

db.transport.insertMany([
    {
        "mode": "plane",
        "emissions": 100
    },
    {
        "mode": "car",
        "emissions": 50
    },
    {
        "mode": "train",
        "emissions": 30
    },
    {
        "mode": "bus",
        "emissions": 20
    },
    {
        "mode": "bike",
        "emissions": 10
    },
    {
        "mode": "walk",
        "emissions": 5
    }
])
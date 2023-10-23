use emissions
db.dropDatabase()

db.transport.insertMany([
    {
        "mode": "Car Petrol",
        "emissions": 163
    },
    {
        "mode": "Car Diesel",
        "emissions": 169
    },
    {
        "mode": "Car Hybrid",
        "emissions": 118
    },
    {
        "mode": "Car Electric",
        "emissions": 55
    },
    {
        "mode": "Car Taxi",
        "emissions": 208
    },
    {
        "mode": "Motorbike",
        "emissions": 113
    },
    {
        "mode": "Bus Single Decker",
        "emissions": 32
    },
    {
        "mode": "Bus Double Decker",
        "emissions": 16
    },
    {
        "mode": "Aeroplane Domestic",
        "emissions": 272
    },
    {
        "mode": "Aeroplane Long Haul",
        "emissions": 261
    },
    {
        "mode": "Aeroplane Short Haul",
        "emissions": 185
    },
    {
        "mode": "Ferry",
        "emissions": 112
    },
    {
        "mode": "Train",
        "emissions": 35
    },
    {
        "mode": "Train Underground",
        "emissions": 30
    },
    {
        "mode": "Tram",
        "emissions": 20
    },
    {
        "mode": "Bike",
        "emissions": 21
    },
    {
        "mode": "E Bike",
        "emissions": 15
    },
    {
        "mode": "E Scooter",
        "emissions": 50
    },
    {
        "mode": "Walk",
        "emissions": 36
    }
])

use emissions
db.dropDatabase()

db.transport.insertMany([
    {
        "mode": "Car Petrol",
        "emissions": 163,
        "tid": 1
    },
    {
        "mode": "Car Diesel",
        "emissions": 169,
        "tid": 2
    },
    {
        "mode": "Car Hybrid",
        "emissions": 118,
        "tid": 3
    },
    {
        "mode": "Car Electric",
        "emissions": 55,
        "tid": 4
    },
    {
        "mode": "Car Taxi",
        "emissions": 208,
        "tid": 5
    },
    {
        "mode": "Motorbike",
        "emissions": 113,
        "tid": 6
    },
    {
        "mode": "Bus Single Decker",
        "emissions": 32,
        "tid": 7
    },
    {
        "mode": "Bus Double Decker",
        "emissions": 16,
        "tid": 8
    },
    {
        "mode": "Aeroplane Domestic",
        "emissions": 272,
        "tid": 9
    },
    {
        "mode": "Aeroplane Long Haul",
        "emissions": 261,
        "tid": 10
    },
    {
        "mode": "Aeroplane Short Haul",
        "emissions": 185,
        "tid": 11
    },
    {
        "mode": "Ferry",
        "emissions": 112,
        "tid": 12
    },
    {
        "mode": "Train",
        "emissions": 35,
        "tid": 13
    },
    {
        "mode": "Train Underground",
        "emissions": 30,
        "tid": 14
    },
    {
        "mode": "Tram",
        "emissions": 20,
        "tid": 15
    },
    {
        "mode": "Bike",
        "emissions": 21,
        "tid": 16
    },
    {
        "mode": "E Bike",
        "emissions": 15,
        "tid": 17
    },
    {
        "mode": "E Scooter",
        "emissions": 50,
        "tid": 18
    },
    {
        "mode": "Walk",
        "emissions": 36,
        "tid": 19
    }
]);

db.employees.insertMany([
    {
        "name": "Bob Bobson",
        "address1": "Johannes Van Der Waalstraat 63",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1098 PN",
        "sid": 1
        //coordinates: 52.352295, 4.942140
    },
    {
        "name": "Jeremy Johnson",
        "address1": "Zuidpolderstraat 200",
        "city": "Haarlem",
        "country": "Netherlands",
        "postcode": "2032 PG",
        "sid": 2
        //coordinates: 52.380154, 4.648886
    },
    {
        "name": "Arlow Marlow",
        "address1": "Abrikozenstraat 80",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1033 KE",
        "sid": 3
        //coordinates: 52.411327, 4.899033
    },
    {
        "name": "Bill Wilson",
        "address1": "Westhove 13-1, Amstelveen",
        "city": "Amstelveen",
        "country": "Netherlands",
        "postcode": "1033 KE",
        "sid": 4
        //coordinates: 52.278706, 4.819517
    },
    {
        "name": "Isabella Arabella",
        "address1": "46 Camel Rd",
        "city": "London",
        "country": "United Kingdom",
        "postcode": "E16 2DD",
        "sid": 5
        //coordinates: 51.503420, 0.045320
    },
    {
        "name": "Winifried Watson",
        "address1": "Govert Flinckstraat 366A",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1074 CG",
        "sid": 6
        //coordinates: 52.357235, 4.901551
    },
    {
        "name": "Peter Peterson",
        "address1": "Parallelweg 5",
        "city": "Bussum",
        "country": "Netherlands",
        "postcode": "1405 AE",
        "sid": 7
        //coordinates: 52.280747, 5.156302
    },
    {
        "name": "Hattie Hattersworth",
        "address1": "Pampagras 1-25",
        "city": "Rotterdam",
        "country": "Netherlands",
        "postcode": "3068 PL",
        "sid": 8
        //coordinates: 51.957132, 4.547503
    },
    {
        "name": "Neville Neilsson",
        "address1": "Van Walbeeckstraat 72III",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1058 CW",
        "sid": 9
        //coordinates: 52.362091, 4.851007
    },
    {
        "name": "Hubert Henklestenk",
        "address1": "Van Walbeeckstraat 72III",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1058 CW",
        "sid": 10
        //coordinates: 52.362091, 4.851007
    },
    {
        "name": "Kelly Clarkson",
        "address1": "La Croixstraat 36",
        "city": "Utrecht",
        "country": "Netherlands",
        "postcode": "3555 CL",
        "sid": 11
        //coordinates: 52.116266, 5.078749
    }
]);
db.trips.insertMany([
    {
        "sid": 1,
        "tid": 2,
        "distance": 40,
        "trips": 10,
        "emissions": 6760
    },
    {
        "sid": 2,
        "tid": 5,
        "distance": 10,
        "trips": 8,
        "emissions": 2080
    },
    {
        "sid": 5,
        "tid": 12,
        "distance": 5,
        "trips": 4,
        "emissions": 560
    }
])
db.business.insertOne([
    {
        "name": "Heineken Experience",
        "address1": "Stadhouderskade 78",
        "city": "Amsterdam",
        "country": "Netherlands",
        "postcode": "1072 AE"
        //coordinates: 52.358008, 4.891746
    }
]);

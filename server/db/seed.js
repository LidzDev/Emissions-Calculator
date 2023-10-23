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

db.employees.insertMany([
    {
        "name": "Bob Bobson"
        "address1": "Johannes Van Der Waalstraat 63"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1098 PN"
        //coordinates: 52.352295, 4.942140
    },
    {
        "name": "Jeremy Johnson"
        "address1": "Zuidpolderstraat 200"
        "city": "Haarlem"
        "country": "Netherlands"
        "postcode": "2032 PG"
        //coordinates: 52.380154, 4.648886
    },
    {
        "name": "Arlow Marlow"
        "address1": "Abrikozenstraat 80"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1033 KE"
        //coordinates: 52.411327, 4.899033      
    },
    {
        "name": "Bill Wilson"
        "address1": "Westhove 13-1, Amstelveen"
        "city": "Amstelveen"
        "country": "Netherlands"
        "postcode": "1033 KE"
        //coordinates: 52.278706, 4.819517      
    },
    {
        "name": "Isabella Arabella"
        "address1": "46 Camel Rd"
        "city": "London"
        "country": "United Kingdom"
        "postcode": "E16 2DD"
        //coordinates: 51.503420, 0.045320      
    },
    {
        "name": "Winifried Watson"
        "address1": "Govert Flinckstraat 366A"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1074 CG"
        //coordinates: 52.357235, 4.901551     
    },
    {
        "name": "Peter Peterson"
        "address1": "Parallelweg 5"
        "city": "Bussum"
        "country": "Netherlands"
        "postcode": "1405 AE"
        //coordinates: 52.280747, 5.156302    
    },
    {
        "name": "Hattie Hattersworth"
        "address1": "Pampagras 1-25"
        "city": "Rotterdam"
        "country": "Netherlands"
        "postcode": "3068 PL"
        //coordinates: 51.957132, 4.547503    
    },
    {
        "name": "Neville Neilsson"
        "address1": "Van Walbeeckstraat 72III"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1058 CW"
        //coordinates: 52.362091, 4.851007   
    },
    {
        "name": "Hubert Henklestenk"
        "address1": "Van Walbeeckstraat 72III"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1058 CW"
        //coordinates: 52.362091, 4.851007   
    },
    {
        "name": "Kelly Clarkson"
        "address1": "La Croixstraat 36"
        "city": "Utrecht"
        "country": "Netherlands"
        "postcode": "3555 CL"
        //coordinates: 52.116266, 5.078749   
    },

db.business.insertOne([
    {
        "name": "Heineken Experience"
        "address1": "Stadhouderskade 78"
        "city": "Amsterdam"
        "country": "Netherlands"
        "postcode": "1072 AE"
        //coordinates: 52.358008, 4.891746
    }
])



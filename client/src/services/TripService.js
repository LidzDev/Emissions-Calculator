const baseURL = 'http://localhost:9000/api/trips/'


const TripService = {

getTrips () {
    return fetch(baseURL)
        .then(res => res.json())
},

getOneTrip(id) {
    return fetch(baseURL + id) 
        .then(res => res.json())
    },

postTrip(payload) {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
},

deleteTrip(id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
},

updateTrip(trip) {
    return fetch(baseURL + trip._id, {
    method: 'PUT',
    body: JSON.stringify(booking),
    headers: {
    'Content-Type': 'application/json'
    }
    })
    .then(res => res.json());
},

}

export default TripService

const baseURL = 'http://localhost:9000/api/trips/'

export const getTrips = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getOneTrip = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}

export const postTrip = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteTrip = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
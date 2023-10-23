const baseURL = 'http://localhost:9000/api/trips/'

export const getTrips = () => {
    return fetch(baseURL)
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
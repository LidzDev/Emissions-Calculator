const baseURL = 'http://localhost:9000/api/modes/'

const TransportService =  {
    getModesOfTransport() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}

export default TransportService
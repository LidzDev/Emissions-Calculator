
import { MapContainer, TileLayer, Marker, Popup }
    from "react-leaflet";
import "leaflet/dist/leaflet.css"
import './static/map.css'

const Map = ({ employees }) => {

    const setMarkers = employees.map((employee) => {
        const coordinates = employee.coordinates
        const geocode = [coordinates.latitude, coordinates.longitude]
        const popUp = employee.name
        return (
            {
                geocode: geocode,
                popUp: popUp
            }
        )
    })

    return ( 
        <MapContainer id="map" center={[52.370216, 4.895168]} zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {setMarkers.map(marker => (
                <Marker position={marker.geocode}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
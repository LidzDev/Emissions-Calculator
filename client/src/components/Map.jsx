
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import './static/Map.css'
import CustomIconMarker from'./static/marker.png'

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

    const businessMarker = {
        geocode: [52.358008, 4.891746],
        popUp: "The Heineken Experience"
    };

    const customIcon = L.icon ({
        iconUrl: CustomIconMarker,
        iconSize: [60, 60]
    })

    return ( 
        <MapContainer id="map" center={[52.370216, 4.895168]} zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {setMarkers.map(marker => (
                <Marker position={marker.geocode}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
            <Marker position={businessMarker.geocode} icon={customIcon}>
                <Popup>{businessMarker.popUp}</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
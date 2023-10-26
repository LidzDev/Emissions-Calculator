const Trip = ({trip, staffName, transportMode, emissions, handleDeleteTrip}) => {

    const emissionsKg = (emissions / 1000).toFixed(2)
    const checkingEmissionsKg = isNaN(emissionsKg) ? 0 : emissionsKg

    return ( 
        <tr>
            <td>{staffName}</td>
            <td>{transportMode}</td>
            <td>{trip.distance}</td>
            <td>{trip.trips}</td>
            <td>{checkingEmissionsKg}</td>
            <td><button onClick={handleDeleteTrip} className="delete-btn">Delete</button></td>
        </tr>
    );
}

export default Trip;
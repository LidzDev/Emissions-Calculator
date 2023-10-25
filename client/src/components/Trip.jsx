const Trip = ({trip, staffName, transportMode, handleDeleteTrip}) => {

    const emissionsKg = (trip.emissions / 1000)

    return ( 
        <tr>
            <td>{staffName}</td>
            <td>{transportMode}</td>
            <td>{trip.distance}</td>
            <td>{trip.trips}</td>
            <td>{emissionsKg}</td>
            {/* <td><button className="update-btn">Update</button></td> */}
            <td><button onClick={handleDeleteTrip} className="delete-btn">Delete</button></td>
        </tr>
    );
}

export default Trip;
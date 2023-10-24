import TransportMode from "./TransportMode"
import TripService from "../services/TripService";



const TripTable = ({trip, deleteTrip, updateTrip, totalEmissions}) => {

    const handleUpdateTrip =() => {
        updateTrip({
        _id: trip._id,
        sid: trip.sid,
        tid: trip.tid,
        distance: trip.distance,
        trips: trip.trips
    })
    }
    const handleDeleteTrip = () => {
        deleteTrip({_id: trip._id});
    }



    return (
        <section>
            <p>You company's total emissions</p> 
            <p>{totalEmissions} kg</p>
            <p>of CO2 produced through travel.</p>

            <table>
                <th></th>
                <tr>
                    <th>Name</th>
                    <th>Mode of Transport</th>
                    <th>Distance</th>
                    {/* <th>{mode.emissions}</th> */}
                    <th>*update buttons below</th>
                    <th>*delete buttons below</th>
                </tr> 
                <tr>
                    <td>*name*</td>
                    {/* <td>{mode.mode}</td> */}
                    <td>*distance*</td>
                    {/* <td>{mode.emissions}</td> */}

                    <td><button onClick={handleUpdateTrip}>Update</button></td>
                    <td><button onClick={handleDeleteTrip}>Delete</button></td>
                    
    


                </tr> 
            </table>
        </section>
        // <h1>I'm the TripTable</h1>
    )}
    

export default TripTable
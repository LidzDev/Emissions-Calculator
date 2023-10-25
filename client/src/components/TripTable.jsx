import Trip from "./Trip"
import { deleteTrip } from "../services/TripService"
import "./static/TripTable.css";

const TripTable = ({ trips, removeTrip, updateTrip, totalEmissions, modes, employees }) => {

    const handleUpdateTrip = () => {
        updateTrip({
            _id: trip._id,
            sid: trip.sid,
            tid: trip.tid,
            distance: trip.distance,
            trips: trip.trips
        })
    }

    const tripItems = trips.map((trip) => {

        const staff = employees.find(employee => employee.sid === trip.sid)
        const staffName = staff.name
        const mode = modes.find(mode => mode.tid === trip.tid)
        const transportMode = mode.mode

        const handleDeleteTrip = () => {
            deleteTrip(trip._id).then(()=>{
            removeTrip(trip._id);
            })
        }

        return <Trip 
            key={trip._id}
            trip={trip}
            staffName={staffName}
            transportMode={transportMode}
            handleDeleteTrip={handleDeleteTrip}
        />
    })

    const emissionsKg = (totalEmissions / 1000)

    return (
        <section>
          <div className="total-emissions-header">
            <p>Your company's total emissions</p>
            <p className="co-total-emissions">{emissionsKg} kg</p>
            <p>of CO2 produced through travel.</p>       
          </div>
          <br/>
          <h2>See a breakdown of your carbon footprint below </h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Mode of Transport</th>
                    <th>Distance</th>
                    <th>Trips per Week</th>
                    <th>Emissions(kg)</th>
                    {/* <th>*update</th> */}
                    <th>*delete</th>
                </tr>
                {tripItems}
            </table>
            <br/>
            <h2>Let's break things down a bit more...</h2>
            <p>*charts go here*</p>
        </section>
    );
}
export default TripTable
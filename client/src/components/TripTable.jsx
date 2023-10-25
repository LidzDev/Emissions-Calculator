import { useState, useEffect } from 'react'
import Trip from "./Trip"
import { deleteTrip } from "../services/TripService"
import "./static/TripTable.css";
import PieChart from "./PieChart";

const TripTable = ({ trips, removeTrip, updateTrip, totalEmissions, modes, employees, tripEmissions, updateTripEmissions }) => {

    // const [pieChartData, setPieChartData] = useState({})

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
        const emissions = mode.emissions
        const newTripEmissions = (trip.distance * trip.trips * emissions)
        // console.log("new trip", newTripEmissions)

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
            emissions={newTripEmissions}
            handleDeleteTrip={handleDeleteTrip}
        />
    })

    const emissionsKg = (totalEmissions / 1000)
    const checkingEmissionsKg = isNaN(emissionsKg) ? 0 : emissionsKg

    const employeeEmissions = {};

    trips.forEach((trip) => {
        const staff = employees.find((employee) => employee.sid === trip.sid);
        const staffName = staff.name;
        const emissionsKg = trip.emissions / 1000;

        if (!employeeEmissions[staffName]) {
            employeeEmissions[staffName] = emissionsKg;
        } 
        else {
            employeeEmissions[staffName] += emissionsKg;
        }
    });

    const pieChartData = Object.entries(employeeEmissions).map(([name, emissions]) => ({
        name: name,
        y: emissions
        }))

    return (
        <>
            <section>
            <div className="total-emissions-intro">
                <p>Your company's total emissions</p>
                <p className="co-total-emissions">{checkingEmissionsKg} kg</p>
                <p>of CO2 produced through travel.</p>       
            </div>
            <div>
            <h2>See a breakdown of your carbon footprint below </h2>
            <div className="table-div">
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
            </div>
            </div>
            <br/>
            <h2>Let's break things down a bit more...</h2>
            </section>
            <PieChart pieChartData={pieChartData} />
        </>
    );
}
export default TripTable
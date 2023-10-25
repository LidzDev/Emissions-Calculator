import { useState } from 'react'
import MainTitle from "./MainTitle"
import TripForm from "./TripForm";
import TripEmissionsTotal from "./TripEmissionsTotal";

const Home = ({ modes, employees, tripEmissions, addTrip, updateTripEmissions }) => {

    const title = "CO2 Calculator"
    const intro = "Calculate your carbon footprint"

    return (
        <>
            <MainTitle title={title} intro={intro} />
            <div className="flex-box">
                <div className="calc-form">
                    <TripForm modes={modes} employees={employees} addTrip={addTrip} updateTripEmissions={updateTripEmissions}/>
                </div>
                <TripEmissionsTotal tripEmissions={tripEmissions}/>
            </div>
        </>
    );
}

export default Home;
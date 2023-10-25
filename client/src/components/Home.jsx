import { useState } from 'react'
import MainTitle from "./MainTitle"
import TripForm from "./TripForm";
import TripEmissionsTotal from "./TripEmissionsTotal";

const Home = ({ modes, employees, addTrip }) => {

    const title = "CO2 Calculator"
    const intro = "Calculate the carbon emissions proudced by your commute & add them to your company's database."

    const [tripEmissions, setTripEmissions] = useState(0)

    const updateTripEmissions = (newTripEmissions) => {
        setTripEmissions(newTripEmissions)
    }

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
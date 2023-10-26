import "./static/TripEmissionsTotal.css"

const TripEmissionsTotal = ({tripEmissions}) => {

    const emissionsKg = (tripEmissions / 1000)
    const checkingEmissionsKg = isNaN(emissionsKg) ? 0 : emissionsKg

    return ( 
        <div className="form-output">
            <h2><b>Estimated CO2 emissions: </b></h2>
                <p className="trip-emissions-total">{checkingEmissionsKg} kg</p>
                <br></br>
                <a href="/triptable" className="results-link">View total estimated CO2 emissions</a>
        </div>
    );
}

export default TripEmissionsTotal;
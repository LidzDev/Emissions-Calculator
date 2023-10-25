const TripEmissionsTotal = ({tripEmissions}) => {

    const emissionsKg = (tripEmissions / 1000)

    return ( 
        <div className="form-output">
            <h2><b>Estimated CO2 emissions: </b></h2>
                <p className="trip-emissions-total">{emissionsKg} kg</p>
                <br></br>
                <a href="/triptable" className="results-link">View total estimated CO2 emissions</a>
         </div>
    );
}

export default TripEmissionsTotal;
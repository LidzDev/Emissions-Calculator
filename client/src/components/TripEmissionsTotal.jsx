const TripEmissionsTotal = ({tripEmissions}) => {

    const emissionsKg = (tripEmissions / 1000)

    return ( 
        <div className="form-output">
            <p>Estimated CO2 emissions: </p>
                <p className="trip-emissions-total">{emissionsKg} kg</p>
//                     <button className="log-estimate-btn" >Log estimate</button>
                <p>View total estimated CO2 emissions *links to entries page*</p>
         </div>
    );
}

export default TripEmissionsTotal;
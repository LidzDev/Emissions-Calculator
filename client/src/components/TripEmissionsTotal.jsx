const TripEmissionsTotal = () => {
    return ( 
        <div className="form-output">
                    <p>Estimated CO2 emissions: </p>
                    <p className="trip-emissions-total">50.93 kg</p> {/**this will be where the calc for the trip goes* */}
                    <button className="log-estimate-btn" >Log estimate</button>
                    <p>View total estimated CO2 emissions *links to entries page*</p>
                </div>
    );
}

export default TripEmissionsTotal;
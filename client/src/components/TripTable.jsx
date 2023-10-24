// import TransportMode from "./TransportMode"
import "./static/TripTable.css";

const TripTable = (tripData) => {
  console.log(tripData);

  const tripItems = tripData.trips.map((trip) => {
    return (
      <tr>
        <td>*name*</td>
        <td>*mode*</td>
        <td>{trip.distance ? trip.distance : "NA"}</td>
        <td>*trips per week*</td>
        <td>{trip.emissions ? trip.emissions : "NA"}</td>
        <td>
          <button className="update-btn">Update</button> 
        </td>
        <td>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <section>
      <div className="total-emissions-header">
        <p>Your company's total emissions:</p>
        <p className="co-total-emissions">*3650 kg*</p>
        <p>of CO2 produced through travel</p>
      </div>
      <br/>
      <h2>See a breakdown of your carbon footprint below </h2>

<div className="table-div">
      <table>
        <tr>
          <th>Name</th>
          <th>Mode of Transport</th>
          <th>Distance</th>
          <th>Trips per Week</th>
          <th>Emissions</th>
          <th>{/*update*/}</th>
          <th>{/*delete*/}</th>
        </tr>
        {tripItems}
      </table>
</div>
      <br/>

      <h2>Let's break things down a bit more...</h2>
      <p>*charts go here*</p>
    </section>
  );
};

export default TripTable;

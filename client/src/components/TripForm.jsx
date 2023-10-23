import {useState} from "react"
import TransportMode from "./TransportMode"
import Employee from "./Employee"
const TripForm = ({modes, employees}) => {

    const transportNodes = modes.map(mode => {
        return <TransportMode
            key={mode._id}
            mode={mode}
            />
    })

    const employeeNodes = employees.map(employee => {
        return <Employee
            key={employee._id}
            employee={employee}
            />
    })

    return (
        // <form onSubmit={onSubmit} id="trip-form" ></form>
        <form  id="trip-form" >
            {/* <h2>Record a Trip</h2> */}
            <div className="formWrap">
                <label htmlFor="employees">Name</label>
                <select
                    // onChange={onChange} 
                    id="employees" 
                    name="employees">
                    Employees
                    {employeeNodes}
                    </select>
            </div>
            <div className="formWrap">
                <label htmlFor="modes">Mode of Transport</label>
                <select 
                // onChange={onChange} 
                id="modes" 
                name="modes">
                Modes of Transport
                {transportNodes}
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="distance">Kilometres (km)</label>
                <input 
                    // onChange={onChange} 
                    type="number" 
                    id="distance" 
                    name="distance" 
                    // value={formData.distance}
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="trips">Trips per week</label>
                <input 
                    // onChange={onChange} 
                    type="number" 
                    id="trips" 
                    name="trips" 
                    // value={formData.trips}
                    />
            </div>
            <input type="submit" value="Log this estimate" id="save"/>
    </form>

    )
}

export default TripForm
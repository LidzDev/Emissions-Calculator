import {useState} from "react"
import TransportMode from "./TransportMode"
import { postTrip } from "../services/TripService"
import Employee from "./Employee"

const TripForm = ({modes, employees, addTrip}) => {


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


    const [formData, setFormData] = useState({
        name: "",
        modes: "",
        distance: "",
        trips: "",
    })


    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postTrip(formData).then((data)=>{
            addTrip(data);
        })
        setFormData({
            name: "",
            modes: "",
            distance: "",
            trips: "",
        });
    }
    
    return (
        <form onSubmit={onSubmit} id="trip-form" >
            <h2>Record a Trip</h2>
            <div className="formWrap">
                <label htmlFor="employees">Name</label><br></br>
                <select
                    onChange={onChange} 
                    id="employees" 
                    name="employees">
                    Employees
                    {employeeNodes}
                    </select>
            </div>
            <div className="formWrap">

                <label htmlFor="modes">Mode of Transport</label><br/>
                <select 
                onChange={onChange} 
                id="modes" 
                name="modes">
                Modes of Transport
                {transportNodes}
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="distance">Kilometres (km)</label><br/>
                <input 
                    onChange={onChange} 
                    type="number" 
                    id="distance" 
                    name="distance" 
                    value={formData.distance}
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="trips">Trips per week</label><br/>
                <input 
                    onChange={onChange} 
                    type="number" 
                    id="trips" 
                    name="trips" 
                    value={formData.trips}
                    />
            </div>
            {/* <input type="submit" value="Log this estimate" id="save"/> */}
    </form>

    )
}

export default TripForm
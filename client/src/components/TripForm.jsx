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
        sid: "",
        tid: "",
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
            sid: "",
            tid: "",
            distance: "",
            trips: "",
        });
    }
    
    return (
        <form onSubmit={onSubmit} id="trip-form" >
            <h2>Record a Trip</h2>
            <div className="formWrap">
                <label htmlFor="employee">Name</label><br></br>
                <select
                    onChange={onChange} 
                    id="employee" 
                    name="sid">
                    Employees
                    {employeeNodes}
                    </select>
            </div>
            <div className="formWrap">

                <label htmlFor="mode">Mode of Transport</label><br/>
                <select 
                onChange={onChange} 
                id="mode" 
                name="tid">
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
                    min="1"
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
                    min="1"
                    />
            </div>
            <input type="submit" value="Log this estimate" id="save"/>
    </form>

    )
}

export default TripForm
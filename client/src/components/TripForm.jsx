import {useState, useEffect} from "react"
import TransportMode from "./TransportMode"
import { postTrip } from "../services/TripService"
import Employee from "./Employee"
import "./static/TripForm.css"; 

const TripForm = ({modes, employees, addTrip, updateTripEmissions}) => {

    const [formData, setFormData] = useState({
        sid: 0,
        tid: 0,
        distance: 0,
        trips: 0
    })

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

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = parseInt(e.target.value);
        const mode = modes.find(mode => mode.tid === newFormData.tid)
        if (mode){
            const transportEmissions = mode.emissions
            const newTripEmissions = (newFormData.distance * newFormData.trips * transportEmissions)
            newFormData.emissions = newTripEmissions
            // if(!newFormData.emissions === NaN){
                updateTripEmissions(newTripEmissions)
            // }
        }
            setFormData(newFormData);
        
        

    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if (!(formData.distance && formData.sid && formData.tid && formData.emissions) ){
            return
        }
        postTrip(formData).then((data)=>{
            addTrip(data);
        })
        setFormData({
            sid: 0,
            tid: 0,
            distance: 0,
            trips: 0
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
                    <option value="" selected disabled>--Select employee--</option>                   
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
                <option value="" selected disabled>--Select transport--</option>
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
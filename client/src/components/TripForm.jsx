import {useState} from "react"
import TransportMode from "./TransportMode"
import { postTrip } from "../services/TripService"


const TripForm = ({modes, addTrip}) => {

    const transportNodes = modes.map(mode => {
        return <TransportMode
            key={mode._id}
            mode={mode}
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
                <label htmlFor="name">Name</label>
                <input 
                    onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} 
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="modes">Mode of Transport</label>
                <select 
                onChange={onChange} 
                id="modes" 
                name="modes">
                    Modes of Transport
                {transportNodes}
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="distance">Kilometres (km)</label>
                <input 
                    onChange={onChange} 
                    type="number" 
                    id="distance" 
                    name="distance" 
                    value={formData.distance}
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="trips">Trips per week</label>
                <input 
                    onChange={onChange} 
                    type="number" 
                    id="trips" 
                    name="trips" 
                    value={formData.trips}
                    />
            </div>
            <input type="submit" value="Log this estimate" id="save"/>
    </form>

    )
}

export default TripForm
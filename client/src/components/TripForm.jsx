import {useState} from "react"
import TransportMode from "./TransportMode"
const TripForm = ({modes}) => {

    const transportNodes = modes.map(mode => {
        return <TransportMode
            key={mode._id}
            mode={mode}
            />
    })

    return (
        // <form onSubmit={onSubmit} id="trip-form" ></form>
        <form  id="trip-form" >
            {/* <h2>Record a Trip</h2> */}
            <div className="formWrap">
                <label htmlFor="name">Name</label><br/>
                <input 
                    // onChange={onChange} 
                    type="text" 
                    id="name" 
                    name="name"
                    // value={formData.name} 
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="modes">Mode of Transport</label><br/>
                <select 
                // onChange={onChange} 
                id="modes" 
                name="modes">
                Modes of Transport
                {transportNodes}
                </select>
            </div>
            <div className="formWrap">
                <label htmlFor="distance">Kilometres (km)</label><br/>
                <input 
                    // onChange={onChange} 
                    type="number" 
                    id="distance" 
                    name="distance" 
                    // value={formData.distance}
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="trips">Trips per week</label><br/>
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
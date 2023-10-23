import TransportMode from "./TransportMode"

const TripTable = ({mode}) => {
    return (
        <section>
            <p>You company's total emissions</p> 
            <p>*total emissions go here</p>
            <p>of CO2 produced through travel.</p>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Mode of Transport</th>
                    <th>Distance</th>
                    <th>{mode.emissions}</th>
                    <th>*update buttons below</th>
                    <th>*delete buttons below</th>
                </tr> 
                <tr>
                    <td>*name*</td>
                    <td>{mode.mode}</td>
                    <td>*distance*</td>
                    <td>{mode.emissions}</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>

                </tr> 
            </table>
        </section>
    )
}

export default TripTable
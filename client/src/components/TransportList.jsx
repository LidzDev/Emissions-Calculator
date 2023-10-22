import TransportMode from "./TransportMode"

const TransportList = ({modes}) => {
    const transportNodes = modes.map(mode => {
        return <TransportMode
            key={mode._id}
            mode={mode}
            />
    })

    return (
        <section id="transportmodes">
            <label htmlFor="modes">Choose a mode of Transport</label>           
            <select id="modes" name="modes">Modes of Transport
                {transportNodes}
            </select>
        </section>
    )

}

export default TransportList
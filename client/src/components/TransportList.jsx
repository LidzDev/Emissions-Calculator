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
            <h2>Modes of Transport</h2>
                {transportNodes}
        </section>
    )

}

export default TransportList
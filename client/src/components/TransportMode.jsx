
const TransportMode = ({mode}) => {
    return (
        <>
        <option value={mode.tid}>{mode.mode} - {mode.emissions}</option> 
        </>
    )
}

export default TransportMode
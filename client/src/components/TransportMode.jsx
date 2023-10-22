
const TransportMode = ({mode}) => {
    return (
        <>
        <option value={mode.mode}>{mode.mode} - {mode.emissions}</option> 
        </>
    )
}

export default TransportMode
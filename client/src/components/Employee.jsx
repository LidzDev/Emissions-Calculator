const Employee = ({employee}) => {
    return (
        <>
        <option value={employee.sid}>{employee.name}</option> 
        </>
    )
}

export default Employee
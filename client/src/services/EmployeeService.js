const baseURL = 'http://localhost:9000/api/employees/'

const EmployeeService =  {
    getEmployees() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}

export default EmployeeService
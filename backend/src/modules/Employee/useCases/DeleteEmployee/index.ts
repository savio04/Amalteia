import EmployeeRepository from "../../repositories/implementatios/EmployeeRepository"
import DeleteEmployeeController from "./DeleteEmployeeController"
import DeleteEmployeeUseCase from "./DeleteEmployeeUseCase"

export default () => {
    const employeeRepository = new EmployeeRepository
    const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository)
    const deleteEmployeeController = new DeleteEmployeeController(
        deleteEmployeeUseCase
    )

    return deleteEmployeeController
}
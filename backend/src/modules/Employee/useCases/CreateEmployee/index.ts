import EmployeeRepository from "../../repositories/implementatios/EmployeeRepository"
import CreateEmployeeController from "./CreateEmployeeController"
import CreateEmployeeUseCase from "./CreateEmployeeUseCase"

export default () => {
    const employeeRepository = new EmployeeRepository
    const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository)
    const createEmployeeController = new CreateEmployeeController(
        createEmployeeUseCase
    )

    return createEmployeeController
}
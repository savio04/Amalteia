import EmployeeRepository from "../../repositories/implementatios/EmployeeRepository"
import UpdateEmployeeController from "./UpdateEmployeeController"
import UpdateEmployeeUseCase from "./UpdateEmployeeUseCase"

export default () => {
    const employeeRepository = new EmployeeRepository
    const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepository)
    const updateEmployeeController = new UpdateEmployeeController(
        updateEmployeeUseCase
    )

    return updateEmployeeController
}
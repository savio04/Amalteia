import EmployeeRepository from "../../repositories/implementatios/EmployeeRepository"
import ListEmployeesController from "./ListEmployeesController"
import ListEmployeesUseCase from "./ListEmployeesUseCase"

export default () => {
    const employeeRepository = new EmployeeRepository
    const listEmployeeUseCase = new ListEmployeesUseCase(employeeRepository)
    const litsEmployeeController = new ListEmployeesController(listEmployeeUseCase)

    return litsEmployeeController
}
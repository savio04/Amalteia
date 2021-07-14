import EmployeeRepository from "../../repositories/implementatios/EmployeeRepository"
import UpdateEmployeeAvatarController from "./UpdateEmployeeAvatarController"
import UpdateEmployeeAvatarUseCase from "./UpdateEmployeeAvatarUseCase"

export default () => {
    const employeeRepository = new EmployeeRepository
    const updateEmployeeAvatarUseCase = new UpdateEmployeeAvatarUseCase(
        employeeRepository
    )
    const updateEmployeeAvatarController = new UpdateEmployeeAvatarController(
        updateEmployeeAvatarUseCase
    )

    return updateEmployeeAvatarController
}
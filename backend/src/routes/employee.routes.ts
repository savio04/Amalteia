import { Router } from "express";
import createEmployeeController from '../modules/Employee/useCases/CreateEmployee'
import listEmployeesController from "../modules/Employee/useCases/ListEmployees";
import updateEmployeesController from "../modules/Employee/useCases/UpdateEmployee";
import deleteEmployeesController from "../modules/Employee/useCases/DeleteEmployee";
import updateEmployeeAvatarController from "../modules/Employee/useCases/UpdateEmployeeAvatar";
import multer from 'multer'
const EmployeeRoute = Router()

const upload = multer({dest: './temp'})


EmployeeRoute.post('/',async (request,response) => {
    await createEmployeeController().handle(request,response)
})

EmployeeRoute.get('/', async (request,response) => {
    await listEmployeesController().handle(request,response)
})

EmployeeRoute.put('/:id', async (request,response) => {
    await updateEmployeesController().handle(request,response)
})

EmployeeRoute.patch('/avatar/:id',upload.single('avatar'),async (request,response) => {
    await updateEmployeeAvatarController().handle(request,response)
})

EmployeeRoute.delete('/:id', async (request,response) => {
    await deleteEmployeesController().handle(request,response)
})

export default EmployeeRoute
import { Router } from 'express'
import EmployeeRoute from './employee.routes'
const Routes = Router()

Routes.use('/employee', EmployeeRoute)


export default Routes

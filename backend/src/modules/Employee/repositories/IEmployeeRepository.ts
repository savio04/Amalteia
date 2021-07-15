import AppError from "../../../errors/AppErro";
import Employee from "../entities/employee";

export interface IEmployeeDTO{
    id?:string
    name: string
    email :string
    birth_date: Date
    admission_date: Date
    sector: string
    office: string 
    level: string  
}

interface IEmployeeRepository{
    createEmployee(data:IEmployeeDTO):Promise<void>
    listAll():Promise<Employee[]>
    updateEmployee(data:IEmployeeDTO):Promise<void>
    deleteEmployee(id:string):Promise<void>
    findByEmail(email:string):Promise<Employee>
    validateData(setor:string,cargo:string,nivel:string):AppError | undefined
    findById(id:string):Promise<Employee>
}

export default IEmployeeRepository
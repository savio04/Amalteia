import AppError from "../../../../errors/AppErro";
import IEmployeeRepository, { IEmployeeDTO } from "../../repositories/IEmployeeRepository";

class ListEmployeesUseCase{
    
    constructor(private employeeRepository:IEmployeeRepository){}

    async execute(){
       const employees = await this.employeeRepository.listAll()

       return employees
    }
}

export default ListEmployeesUseCase
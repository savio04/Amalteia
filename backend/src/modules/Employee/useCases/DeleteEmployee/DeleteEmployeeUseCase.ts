import AppError from "../../../../errors/AppErro";
import IEmployeeRepository from "../../repositories/IEmployeeRepository";

class DeleteEmployeeUseCase{
    
    constructor(private employeeRepository:IEmployeeRepository){}

    async execute(id:string){
        const employee = await this.employeeRepository.findById(id)

        if(!employee){
            throw new AppError(`Employee doesn't exist`)
        }

        await this.employeeRepository.deleteEmployee(id)
    }
}

export default DeleteEmployeeUseCase
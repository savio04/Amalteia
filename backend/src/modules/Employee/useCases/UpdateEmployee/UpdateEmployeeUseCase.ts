import AppError from "../../../../errors/AppErro";
import IEmployeeRepository, { IEmployeeDTO } from "../../repositories/IEmployeeRepository";
class UpdateEmployeeUseCase{
    
    constructor(private employeeRepository:IEmployeeRepository){}

    async execute({
        id,
        name,
        email,
        birth_date,
        admission_date, 
        sector, 
        office,  
        level 
    }:IEmployeeDTO){
        const EmployeeExiting = await this.employeeRepository.findById(
            id as string
        )
        
        if(!EmployeeExiting){
            throw new AppError(`Employee doesn't exist`)
        }

        const CorrectData = this.employeeRepository.validateData(
            sector,office,level
        )

        if(CorrectData){
            throw CorrectData
        }

        await this.employeeRepository.updateEmployee({
            id,
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level
        })
    }
}

export default UpdateEmployeeUseCase
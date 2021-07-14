import AppError from "../../../../errors/AppErro";
import IEmployeeRepository, { IEmployeeDTO } from "../../repositories/IEmployeeRepository";

class CreateEmployeeUseCase{
    
    constructor(private employeeRepository:IEmployeeRepository){}

    async execute({
        name,
        email,
        birth_date,
        admission_date, 
        sector, 
        office,  
        level
    }:IEmployeeDTO){
        const EmailAlreayExisting = await this.employeeRepository.findByEmail(email)
        const CorrectData = this.employeeRepository.validateData(
            sector,office,level
        )

        if(EmailAlreayExisting){
            throw new AppError('Email already existing!')
        }

        if(CorrectData){
            throw CorrectData
        }

        await this.employeeRepository.createEmployee({
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

export default CreateEmployeeUseCase
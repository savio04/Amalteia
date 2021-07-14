import { getRepository, Repository } from "typeorm";
import AppError from "../../../../errors/AppErro";
import Employee from "../../entities/employee";
import IEmployeeRepository, { IEmployeeDTO } from "../IEmployeeRepository";

class EmployeeRepository implements IEmployeeRepository{
    private validData = {
        sector: ['Engenharia', 'Compras', 'Vendas', 'Financeiro'],
        office: ['Auxiliar', 'Técnico','Engenheiro','Diretor'],
        level: ['Junior', 'Pleno','Senior','Estagiario'],
    }
    private employeeRepository:Repository<Employee>

    constructor(){
        this.employeeRepository = getRepository(Employee)
    }
    async createEmployee({
        id,
        name,
        email,
        birth_date,
        admission_date, 
        sector, 
        office,  
        level,
        avatar
    }:IEmployeeDTO){
        const employee = this.employeeRepository.create({
            id,
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level,
            avatar
        })

        await this.employeeRepository.save(employee)
    }

    async findByEmail(email:string){
        const employee = await this.employeeRepository.findOne({email})

        return employee as Employee
    }

    validateData(sector:string,office:string,level:string){
        const ExistingSector = this.validData.sector.find(validSector => validSector === sector)
        const ExistingOffice = this.validData.office.find(validOffice => validOffice === office)
        const ExistingLevel = this.validData.level.find(validLevel => validLevel === level)

        if(!ExistingSector){
            return new AppError('Sector not exiting!')
        }

        if(!ExistingOffice){
            return new AppError('Office not exiting!')
        }

        if(!ExistingLevel){
            return new AppError('Level not exiting!')
        }
    }

    async listAll(){
        const employees = await this.employeeRepository.find()

        return employees
    }

    async findById(id:string){
        const employee = await this.employeeRepository.findOne(id)

        return employee as Employee
    }

    async deleteEmployee(id:string){
        await this.employeeRepository.delete(id)
    }

    async updateEmployee({
        id,
        name,
        email,
        birth_date,
        admission_date, 
        sector, 
        office,  
        level
    }:IEmployeeDTO){
        await this.employeeRepository.createQueryBuilder()
            .update('funcionarios')
            .set({
                name,
                email,
                birth_date,
                admission_date, 
                sector, 
                office,  
                level
            })
            .where('id =:id', {id})
            .execute()
    }
}

export default EmployeeRepository
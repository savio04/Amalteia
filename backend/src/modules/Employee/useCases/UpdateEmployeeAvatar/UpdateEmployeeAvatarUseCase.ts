import IEmployeeRepository from "../../repositories/IEmployeeRepository";
import deleFile from "../../../../utils/file";

interface IRequest{
    id:string
    avatar:string
}

class UpdateEmployeeAvatarUseCase{
    constructor(private employeeRepostory:IEmployeeRepository){}

    async execute({id,avatar}:IRequest){
        const employee = await this.employeeRepostory.findById(id)
        
        if(employee.avatar){
            await deleFile(`./temp/${employee.avatar}`)
        }

        employee.avatar = avatar

        await this.employeeRepostory.createEmployee(employee)
    }
}

export default UpdateEmployeeAvatarUseCase
import { Request, Response } from "express";
import UpdateEmployeeUseCase from "./UpdateEmployeeUseCase";

class UpdateEmployeeController{
    constructor(private updateEmployeeUseCase:UpdateEmployeeUseCase){}

    async handle(request:Request,response:Response){
        const { id } = request.params
        const {
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level  
        } = request.body

        await this.updateEmployeeUseCase.execute({
            id,
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level
        })

        return response.status(204).send()
    }
}

export default UpdateEmployeeController
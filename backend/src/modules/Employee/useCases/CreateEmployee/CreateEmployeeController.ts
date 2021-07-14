import { Request, Response } from "express";
import CreateEmployeeUseCase from "./CreateEmployeeUseCase";

class CreateEmployeeController{
    constructor(private createEmployeeUseCase:CreateEmployeeUseCase){}

    async handle(request:Request,response:Response){
        const { 
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level  
        } = request.body


        await this.createEmployeeUseCase.execute({
            name,
            email,
            birth_date,
            admission_date, 
            sector, 
            office,  
            level
        })

        return response.status(200).send()
    }
}

export default CreateEmployeeController
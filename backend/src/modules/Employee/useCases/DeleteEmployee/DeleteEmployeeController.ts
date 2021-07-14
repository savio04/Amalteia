import { Request, Response } from "express";
import DeleteEmployeeUseCase from "./DeleteEmployeeUseCase";

class DeleteEmployeeController{
    constructor(private deleteEmployeeUseCase:DeleteEmployeeUseCase){}

    async handle(request:Request,response:Response){
        const { id } = request.params

        await this.deleteEmployeeUseCase.execute(id)

        return response.status(204).send()
    }
}

export default DeleteEmployeeController
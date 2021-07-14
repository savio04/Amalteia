import { Request, Response } from "express";
import ListEmployeesUseCase from "./ListEmployeesUseCase";

class ListEmployeesController{
    constructor(private listEmployeeUseCase:ListEmployeesUseCase){}

    async handle(request:Request,response:Response){
        const employees = await this.listEmployeeUseCase.execute()

        return response.json(employees)
    }
}

export default ListEmployeesController
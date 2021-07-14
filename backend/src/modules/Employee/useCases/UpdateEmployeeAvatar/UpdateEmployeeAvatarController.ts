import { Request,Response } from 'express'
import UpdateEmployeeAvatarUseCase from './UpdateEmployeeAvatarUseCase'

class UpdateEmployeeAvatarController{
    constructor(private updateEmployeeAvatar:UpdateEmployeeAvatarUseCase){}
    async handle(request:Request,response:Response){
        const avatar = request.file?.filename as string
        const { id } = request.params

        await this.updateEmployeeAvatar.execute({
            id,
            avatar
        })

        return response.status(204).send()
    }
}


export default UpdateEmployeeAvatarController
import 'reflect-metadata'
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import './database'
import AppError from './errors/AppErro'
import cors from 'cors'
import Routes from './routes'
const app = express()


app.use(express.json())
app.use(cors())
app.use(Routes)

app.use((err:Error, request:Request,response:Response,next:NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.status).json({
            message: err.message
        })
    }

    return response.status(500).json({
        message: err.message
    })
})

app.listen(1212,() => {
    console.log('Api iniciada na porta 1212...')
})
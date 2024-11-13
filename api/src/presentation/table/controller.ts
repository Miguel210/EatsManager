import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { CreateTableDto } from "../../domain/dtos/table/create-table.dto";
import { TableService } from "../services/table.service";
import { UpdateTableDto } from "../../domain/dtos/table/update-table.dto";


export class TableController {

    constructor(
        private readonly TableService: TableService
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, createTableDto] = CreateTableDto.create(req.body)
        if( error )return res.status(400).json({error})

        this.TableService.create(createTableDto!)
        .then(table => res.json(table))
        .catch(error => this.handleError(error, res))
    }

    getAllp = (req: Request, res: Response) => {
       
        const form = {

        }

        this.TableService.getAll(form)
        .then( table => res.json(table))
        .catch( error => this.handleError(error,res))

    }

    getTable = (req: Request, res: Response) => {

        const { id } = req.body
        if( !id ) this.handleError('No Id',res);

        this.TableService.get(id)
        .then( table => res.json(table))
        .catch(error => this.handleError(error, res))


    }


    update = (req: Request, res: Response) => {
        const id = req.body.id;

        const [error, updateTableDto] =  UpdateTableDto.create({...req.body,id})
        if( error )return res.status(400).json({error})
        
        this.TableService.update(updateTableDto!)
        .then(table => res.json(table))
        .catch(error => this.handleError(error, res))

    }


    delete = (req: Request, res: Response) => {

        const id = req.body.id

        if( !id ) return this.handleError('Not id', res);

        this.TableService.delete(id)
        .then(table => res.json(table))
        .catch(error => this.handleError(error, res))
    }

}
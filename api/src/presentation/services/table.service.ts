import { CreateTableDto } from "../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../domain/dtos/table/update-table.dto";
import { TableRepositoryImpl } from "../../infraestructure/table/repository/tableRepository.impl";
import { CreateTable } from '../../domain/use-cases/table/create-table';
import { GetTable } from "../../domain/use-cases/table/get-table";
import { UpdateTable } from "../../domain/use-cases/table/update-table";
import { DeleteTable } from "../../domain/use-cases/table/delete-table";



export class TableService {

    constructor(
        private readonly repository: TableRepositoryImpl
    ) {}

    public async create(dto: CreateTableDto) {

        const Table = await new CreateTable(this.repository).execute(dto)
        .then( table => table)
        .catch( error => console.log({error}))

        return {
            data: Table
        }
    }

    public async get(id: string) {

        const Table = await new GetTable(this.repository).execute(id)
        .then( table => table)
        .catch( error => console.log({error}))

        return {
            data: Table
        }
    }

    public async getAll(form: any) {

        const Tables = await new GetTable(this.repository).execute(form)
        .then( table => table)
        .catch( error => console.log({error}))

        return {
            data: Tables
        }
    }

    public async update(dto: UpdateTableDto) {

        const Table = await new UpdateTable(this.repository).execute(dto)
        .then( table => table)
        .catch( error => console.log({error}))

        return {
            data: Table
        }
    }

    public async delete(id: string) {

        const Table = await new DeleteTable(this.repository).execute(id)
        .then(table => table)
        .catch(error => console.log({error})
    )
        return {
            data: Table
        }
    }

}
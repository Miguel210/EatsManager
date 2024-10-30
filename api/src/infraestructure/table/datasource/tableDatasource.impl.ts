import { TableDatasoruce } from "../../../domain/datasource/table/table.datasource";
import { CreateTableDto } from "../../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../../domain/dtos/table/update-table.dto";
import { TableEntity } from "../../../domain/entities/table.entity";



export class tableDatasourceImpl implements TableDatasoruce {
    
    async create(dto: CreateTableDto): Promise<TableEntity> {
        throw new Error("Method not implemented.");
    }
    async get(id: string): Promise<TableEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<TableEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateTableDto): Promise<TableEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<TableEntity> {
        throw new Error("Method not implemented.");
    }

}
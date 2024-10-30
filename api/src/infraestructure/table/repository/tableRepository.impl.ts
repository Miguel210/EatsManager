import { TableDatasoruce } from "../../../domain/datasource/table/table.datasource";
import { CreateTableDto } from "../../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../../domain/dtos/table/update-table.dto";
import { TableEntity } from "../../../domain/entities/table.entity";
import { TableRepository } from "../../../domain/repositories/table/table.repository";



export class tableRepositoryImpl implements TableRepository {

    constructor(
        private readonly datasource: TableDatasoruce
    ) {}

    create(dto: CreateTableDto): Promise<TableEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<TableEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<TableEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateTableDto): Promise<TableEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<TableEntity> {
        return this.datasource.delete(id)
    }

}
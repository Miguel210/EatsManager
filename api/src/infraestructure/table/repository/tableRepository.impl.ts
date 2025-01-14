import { TableDatasoruce } from "../../../domain/datasource/table/table.datasource";
import { CreateTableDto } from "../../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../../domain/dtos/table/update-table.dto";
import { TableEntity } from "../../../domain/entities/table.entity";
import { TableRepository } from "../../../domain/repositories/table/table.repository";



export class TableRepositoryImpl implements TableRepository {

    constructor(
        private readonly datasource: TableDatasoruce
    ) {}
    PayclientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
        return this.datasource.PayclientOrderDataTable(dto);
    }

    finalizateclientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
        return this.datasource.finalizateclientOrderDataTable(dto);
    }

    clientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
        return this.datasource.clientOrderDataTable(dto)
    }

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

    getDataTable(id: string): Promise<TableEntity> {
        return this.datasource.getDataTable(id)
    }

    

    
}
import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface GetTableDatauseCase {
    execute(id: string): Promise<TableEntity>;
}


export class GetTableData implements GetTableDatauseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(id: string): Promise<TableEntity> {
        return this.repository.getDataTable(id)
    }
}
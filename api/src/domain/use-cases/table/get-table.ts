import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface GetTableuseCase {
    execute(id: string): Promise<TableEntity>;
}


export class GetTable implements GetTableuseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(id: string): Promise<TableEntity> {
        return this.repository.get(id)
    }
}
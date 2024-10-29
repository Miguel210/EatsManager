import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface DeleteTableuseCase {
    execute(id: string): Promise<TableEntity>;
}


export class DeleteTable implements DeleteTableuseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(id: string): Promise<TableEntity> {
        return this.repository.delete(id)
    }
}
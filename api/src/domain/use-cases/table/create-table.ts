import { CreateTableDto } from "../../dtos/table/create-table.dto";
import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface CreateTableuseCase {
    execute(dto: CreateTableDto): Promise<TableEntity>;
}


export class CreateTable implements CreateTableuseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(dto: CreateTableDto): Promise<TableEntity> {
        return this.repository.create(dto)
    }
}
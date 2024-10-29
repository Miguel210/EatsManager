import { UpdateTableDto } from "../../dtos/table/update-table.dto";
import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface UpdateTableuseCase {
    execute(dto: UpdateTableDto): Promise<TableEntity>;
}


export class UpdateTable implements UpdateTableuseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(dto: UpdateTableDto): Promise<TableEntity> {
        return this.repository.update(dto)
    }
}
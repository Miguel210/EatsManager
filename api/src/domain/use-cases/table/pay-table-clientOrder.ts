import { UpdateTableDto } from "../../dtos/table/update-table.dto";
import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface PayTableCLientOrderDatauseCase {
    execute(dto: UpdateTableDto): Promise<TableEntity>;
}


export class PayTableCLientOrder implements PayTableCLientOrderDatauseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(dto: UpdateTableDto): Promise<TableEntity> {
        return this.repository.PayclientOrderDataTable(dto)
    }
}
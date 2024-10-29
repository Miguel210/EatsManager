import { TableEntity } from "../../entities/table.entity";
import { TableRepository } from "../../repositories/table/table.repository";



export interface GetAllTableuseCase {
    execute(form: any): Promise<TableEntity[]>;
}


export class GetAllTable implements GetAllTableuseCase {

    constructor(
        private readonly repository: TableRepository
    ) {}

    execute(form: any): Promise<TableEntity[]> {
        return this.repository.getAll(form)
    }
}
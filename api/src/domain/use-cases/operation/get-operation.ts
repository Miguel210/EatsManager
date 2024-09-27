import { OperationDatasource } from "../../datasource/operation/operation.datasource";
import { OperationEntity } from "../../entities/operation.entity";



export interface GetsAllByProfileUseCase {
    execute(id: string): Promise<OperationEntity[]>;
}

export class GetsAllByProfile implements GetsAllByProfileUseCase {

    constructor(
        private readonly repository: OperationDatasource
    ){}
    execute(id: string): Promise<OperationEntity[]> {
        return this.repository.getAllByProfile(id)
    }

    
}
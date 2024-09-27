import { OperationDatasource } from "../../../domain/datasource/operation/operation.datasource";
import { OperationEntity } from "../../../domain/entities/operation.entity";
import { OperationRepository } from "../../../domain/repositories/operation/operation.repository";



export class OperationRepositoryImpl implements OperationRepository {
    
    constructor(
        private readonly datasource: OperationDatasource,
    ){}
    
    getAllByProfile(id: string): Promise<OperationEntity[]> {
        return this.datasource.getAllByProfile(id);
    }

}
import { OperationEntity } from "../../entities/operation.entity";


export abstract class OperationDatasource {
    abstract getAllByProfile(id: string): Promise<OperationEntity[]>;
}
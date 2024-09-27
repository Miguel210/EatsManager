import { OperationEntity } from "../../entities/operation.entity";


export abstract class OperationRepository {
    abstract getAllByProfile(id: string): Promise<OperationEntity[]>
}
import { GetsAllByProfile } from "../../domain/use-cases/operation/get-operation"
import { OperationRepositoryImpl } from "../../infraestructure/operation/repository/operation.repository.impl"






export class OperationService {


    constructor(
        readonly operationRepository: OperationRepositoryImpl
    ){}


    async getsOperations(profileDto: string){

        const operation = await new GetsAllByProfile(this.operationRepository).execute(profileDto)

        return {
            operations: '',
            module: ''
        }
    }
}
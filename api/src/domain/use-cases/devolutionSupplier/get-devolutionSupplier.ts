import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../repositories/devolutionSupplier/devolutionSupplier.repository";


export interface GetDevolutionSupplierUseCase {
    execute(id: string): Promise<DevolutionSupplierEntity>;
}


export class GetDevolutionSupplier implements GetDevolutionSupplierUseCase {

    constructor(
        private readonly repository: DevolutionSupplierRepository
    ) {}
    
    execute(id: string): Promise<DevolutionSupplierEntity> {
        return this.repository.get(id)
    }
}
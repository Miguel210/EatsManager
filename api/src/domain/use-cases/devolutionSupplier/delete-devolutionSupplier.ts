import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../repositories/devolutionSupplier/devolutionSupplier.repository";


export interface DeleteDevolutionSupplierUseCase {
    execute(id: string ): Promise<DevolutionSupplierEntity>;
}


export class DeleteDevolutionSupplier implements DeleteDevolutionSupplierUseCase {

    constructor(
        private readonly repository: DevolutionSupplierRepository
    ) {}
    
    execute(id: string ): Promise<DevolutionSupplierEntity> {
        return this.repository.delete(id)
    }
}
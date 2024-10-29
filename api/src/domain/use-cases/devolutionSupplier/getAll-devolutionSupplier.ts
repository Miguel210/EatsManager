import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../repositories/devolutionSupplier/devolutionSupplier.repository";


export interface GetAllDevolutionSupplierUseCase {
    execute(form: any): Promise<DevolutionSupplierEntity[]>;
}


export class GetAllDevolutionSupplier implements GetAllDevolutionSupplierUseCase {

    constructor(
        private readonly repository: DevolutionSupplierRepository
    ) {}
    
    execute(form: any): Promise<DevolutionSupplierEntity[]> {
        return this.repository.getAll(form)
    }
}
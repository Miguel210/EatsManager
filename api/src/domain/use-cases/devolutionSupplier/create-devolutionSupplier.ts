import { CreateDevolutionSupplierDto } from "../../dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../repositories/devolutionSupplier/devolutionSupplier.repository";


export interface CreateDevolutionSupplierUseCase {
    execute(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity>;
}


export class CreateDevolutionSupplier implements CreateDevolutionSupplierUseCase {

    constructor(
        private readonly repository: DevolutionSupplierRepository
    ) {}
    
    execute(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        return this.repository.create(dto)
    }
}
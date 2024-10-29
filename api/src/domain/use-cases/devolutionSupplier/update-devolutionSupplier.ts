import { UpdateDevolutionSupplierDto } from "../../dtos/devolutionSupplier/update-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../repositories/devolutionSupplier/devolutionSupplier.repository";


export interface UpdateDevolutionSupplierUseCase {
    execute(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity>;
}


export class UpdateDevolutionSupplier implements UpdateDevolutionSupplierUseCase {

    constructor(
        private readonly repository: DevolutionSupplierRepository
    ) {}
    
    execute(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        return this.repository.update(dto)
    }
}
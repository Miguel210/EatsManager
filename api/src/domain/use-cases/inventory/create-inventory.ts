import { CreateInventoryDto } from "../../dtos/inventory/create-inventory.dto"
import { InventoryEntity } from "../../entities/inventory.entity";
import { InventoryRepository } from "../../repositories/inventory/inventory.repository";



export interface CreateInventoryUseCase {
    execute(dto: CreateInventoryDto): Promise<InventoryEntity>;
}

export class CreateInventory implements CreateInventoryUseCase {

    constructor(
        private readonly repository: InventoryRepository
    ) {}
    execute(dto: CreateInventoryDto): Promise<InventoryEntity> {
        return this.repository.create(dto);
    }

}
import { InventoryEntity } from "../../entities/inventory.entity";
import { InventoryRepository } from "../../repositories/inventory/inventory.repository";


export interface GetAllInventoryUseCase {
    execute(): Promise<InventoryEntity[]>;
}



export class GetAllInventory implements GetAllInventoryUseCase {

    constructor(
        private readonly repository: InventoryRepository
    ) {}

    execute(): Promise<InventoryEntity[]> {
        return this.repository.getAll()
    }
}
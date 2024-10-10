import { InventoryEntity } from "../../entities/inventory.entity";
import { InventoryRepository } from "../../repositories/inventory/inventory.repository";


export interface GetAllInventoryUseCase {
    execute(obj: object): Promise<InventoryEntity[]>;
}



export class GetAllInventory implements GetAllInventoryUseCase {

    constructor(
        private readonly repository: InventoryRepository
    ) {}

    execute(obj: object): Promise<InventoryEntity[]> {
        return this.repository.getAll(obj)
    }
}
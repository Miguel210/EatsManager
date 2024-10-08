import { InventoryDatasource } from "../../../domain/datasource/inventory/inventory.datasource";
import { CreateInventoryDto } from "../../../domain/dtos/inventory/create-inventory.dto";
import { InventoryEntity } from "../../../domain/entities/inventory.entity";
import { InventoryRepository } from "../../../domain/repositories/inventory/inventory.repository";



export class InventoryRepositoryImpl implements InventoryRepository {

    constructor(
        private readonly datasource: InventoryDatasource
    ) {}
    create(createInventoryDto: CreateInventoryDto): Promise<InventoryEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<InventoryEntity[]> {
        return this.datasource.getAll();
    }
}
import { CreateInventoryDto } from "../../dtos/inventory/create-inventory.dto";
import { InventoryEntity } from "../../entities/inventory.entity";


export abstract class InventoryDatasource {
    abstract create(createInventoryDto: CreateInventoryDto): Promise<InventoryEntity>;

    abstract getAll(obj: object): Promise<InventoryEntity[]>;
}
import { CreateInventoryDto } from "../../domain/dtos/inventory/create-inventory.dto";
import { CreateInventory } from "../../domain/use-cases/inventory/create-inventory";
import { GetAllInventory } from "../../domain/use-cases/inventory/get-inventories";
import { InventoryRepositoryImpl } from "../../infraestructure/inventory/repositories/inventory.repository.impl";



export class InventoryService {

    constructor(
        readonly repository: InventoryRepositoryImpl
    ) {}



    public async getAll() {

        const inventory = await new GetAllInventory(this.repository).execute()
        .then( inventory => inventory)
        .catch(error => console.log(error))

        return {
            data: inventory
        }

    }

    public async create(dto: CreateInventoryDto) {

        const inventory = await new CreateInventory(this.repository).execute(dto)
        .then( inventory => inventory)
        .catch(error => console.log({error}))


        return {
            data: inventory
        }
    }
}
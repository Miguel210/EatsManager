import { prisma } from "../../data";
import { CreateInventoryDto } from "../../domain/dtos/inventory/create-inventory.dto";
import { CreateInventory } from "../../domain/use-cases/inventory/create-inventory";
import { GetAllInventory } from "../../domain/use-cases/inventory/get-inventories";
import { InventoryRepositoryImpl } from "../../infraestructure/inventory/repositories/inventory.repository.impl";



export class InventoryService {

    constructor(
        readonly repository: InventoryRepositoryImpl
    ) {}



    public async init() {

        const product: any = await prisma.$queryRawUnsafe("select * from product")
            .then(product => product)
            .catch(error => console.log(error)
        )
        console.log(product.length) ;
        
        
        let dictionery: {[key: string]: string} = {};

        for (let index: number = 0; index < product.length; index++) {
            let id: string = product[index].id ;

            dictionery[id] =  product[index].description

        }
        
        return {
            data: dictionery
        }
    }
    public async getAll(data: object) {

        
        const inventory = await new GetAllInventory(this.repository).execute(data)
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
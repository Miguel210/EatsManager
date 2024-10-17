import { CreateproductTypeDto } from "../../domain/dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../domain/dtos/productType/update-productType.dto";
import { CreateProductType } from "../../domain/use-cases/productType/create-productType";
import { GetAllProductType } from "../../domain/use-cases/productType/get-productsType";
import { ProductTypeRepositoryImpl } from "../../infraestructure/productType/repository/productType.repository";



export class ProductTypeService {

    constructor(
        readonly repository: ProductTypeRepositoryImpl
    ) {}

    public async create(dto: CreateproductTypeDto){
    
    const type = await new CreateProductType(this.repository).execute(dto)
        .then(type => type)
        .catch(error => console.log({error}));

        return {
            data: {
                type
            }
        }        
    }

    public async getAll(form: any) {


        const types = await new GetAllProductType(this.repository).execute(form)
        .then(tipes => tipes)
        .catch(error => console.log({error}));

        return {
            data: {
                types
            }
        }
    }

    public async get(id: string) {

    }

    public async update(dto: UpdateproductTypeDto) {

    }
    
    public async delete(id: string) {

    }
}
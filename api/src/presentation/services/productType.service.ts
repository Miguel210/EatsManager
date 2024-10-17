import { CreateproductTypeDto } from "../../domain/dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../domain/dtos/productType/update-productType.dto";
import { GetAllProductType } from "../../domain/use-cases/productType/get-productsType";
import { ProductTypeRepositoryImpl } from "../../infraestructure/productType/repository/productType.repository";



export class ProductTypeService {

    constructor(
        readonly repository: ProductTypeRepositoryImpl
    ) {}

    public async create(dto: CreateproductTypeDto){

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
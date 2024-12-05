import { CustomError } from "../../domain";
import { CreateproductTypeDto } from "../../domain/dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../domain/dtos/productType/update-productType.dto";
import { CreateProductType } from "../../domain/use-cases/productType/create-productType";
import { DeleteProductType } from "../../domain/use-cases/productType/delete-productType";
import { GetAllProductType } from "../../domain/use-cases/productType/get-productsType";
import { GetProductType } from "../../domain/use-cases/productType/get-productType";
import { UpdateProductType } from "../../domain/use-cases/productType/update-productType";
import { ProductTypeRepositoryImpl } from "../../infraestructure/productType/repository/productType.repository";



export class ProductTypeService {

    constructor(
        readonly repository: ProductTypeRepositoryImpl
    ) {}

    public async create(dto: CreateproductTypeDto){
    
    const type = await new CreateProductType(this.repository).execute(dto)
        .then(type => type)
        .catch(error => console.log({error}));

        if(!type) throw CustomError.badRequest('Product already exist');

        return {
            data: type
        }        
    }

    public async getAll(form: any) {


        const tipes = await new GetAllProductType(this.repository).execute(form)
        .then(tipes => tipes)
        .catch(error => console.log({error}));

        if(!tipes) throw CustomError.badRequest('Product already exist');

        return {
            data: tipes
        }
    }

    public async get(id: string) {

        
        const type = await new GetProductType(this.repository).execute(id)
        .then(type => type)
        .catch(error => console.log({error}));

        if(!type) throw CustomError.badRequest('Product already exist');

        return {
            data: type
        }
    }

    public async update(dto: UpdateproductTypeDto) {

        const type = await new UpdateProductType(this.repository).execute(dto)
        .then(type => type)
        .catch(error => console.log({error}));

        if(!type) throw CustomError.badRequest('Product already exist');

        return {
            data: type
        }
    }
    
    public async delete(id: string) {

        const type = await new DeleteProductType(this.repository).execute(id)
        .then(type => type)
        .catch(error => console.log({error}));

        if(!type) throw CustomError.badRequest('Product already exist');

        return {
            data: type
        }
    }
}
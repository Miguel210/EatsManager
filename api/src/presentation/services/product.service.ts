import { CustomError } from "../../domain";
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { CreateProduct } from "../../domain/use-cases/product/create-product";
import { DeleteProduct } from "../../domain/use-cases/product/delete-product";
import { GetProduct } from "../../domain/use-cases/product/get-product";
import { GetProducts } from "../../domain/use-cases/product/get-products";
import { UpdateProduct } from "../../domain/use-cases/product/update-product";
import { ProductRepositoryImpl } from "../../infraestructure/product/repositories/product.repository.impl";



export class ProductService {

    constructor(
        readonly repository: ProductRepositoryImpl
    ) {}

    public async create(dto: CreateProductDto){
        

        const product = await new CreateProduct(this.repository).execute(dto)
        .then(product => product)
        .catch(error => console.log({error}));

        if(!product) throw CustomError.badRequest('Error data');


        return {
            data: product
            
        }
    }


    public async getAll(form: any) {

        
        const products = await new GetProducts(this.repository).execute(form)
            .then(product => product)
            .catch(error => console.log({error}));
        
            if(!products) throw CustomError.badRequest('Error data');

            return {
                data: products
                
            }
    }



    public async get(id: string) {

        const product = await new GetProduct(this.repository).execute(id)
        .then(product => product)
        .catch( error => console.log({error}))
        
        if( !product ) throw CustomError.badRequest('Error data');

        return {
            data: product
        }
    }



    public async update(dto: UpdateProductDto){

        const product = await new UpdateProduct(this.repository).execute(dto)
        .then(product => product)
        .catch(error => console.log({error}))

        if(!product) throw CustomError.badRequest('Error data');

        return {
            data: product
        }
    }

    public async delete(id: string) {

        const product = await new DeleteProduct(this.repository).execute(id)
        .then( product => product)
        .catch( error =>  console.log({error}));

        if(!product) throw CustomError.badRequest('Error data');

        return {
            data: product
        }
    }
}
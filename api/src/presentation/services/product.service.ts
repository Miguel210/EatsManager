import { GetProduct } from "../../domain/use-cases/product/get-product";
import { GetProducts } from "../../domain/use-cases/product/get-products";
import { ProductRepositoryImpl } from "../../infraestructure/product/repositories/product.repository.impl";



export class ProductService {

    constructor(
        readonly repository: ProductRepositoryImpl
    ) {}

    public async getAll(form: any) {

        
        const products = await new GetProducts(this.repository).execute(form)
            .then(product => product)
            .catch(error => console.log({error}));
        
            return {
                data: {
                    products
                }
            }
    }



    public async get(id: string) {

        const product = await new GetProduct(this.repository).execute(id)
        .then(product => product)
        .catch( error => console.log({error}))

        return {
            data: {
                product
            }
        }
    }
}
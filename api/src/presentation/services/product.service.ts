import { GetProducts } from "../../domain/use-cases/product/get-products";
import { ProductRepositoryImpl } from "../../infraestructure/product/repositories/product.repository.impl";



export class ProductService {

    constructor(
        readonly repository: ProductRepositoryImpl
    ) {}

    public async getAll() {

        const products = await new GetProducts(this.repository).execute()
            .then(product => product)
            .catch(error => console.log({error}));
        
            return {
                data: {
                    products
                }
            }
    }
}
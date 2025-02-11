import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product/product.repository";



export interface GetProductsUseCase {
    execute(form: any): Promise <ProductEntity[]>;
}


export class GetProducts implements GetProductsUseCase {

    constructor(
        private readonly repository: ProductRepository
    ) {}

    execute(form: any): Promise<ProductEntity[]> {
        return this.repository.getAll(form)
    }

}
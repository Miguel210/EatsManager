import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product/product.repository";



export interface GetProductUseCase {
    execute(id: string): Promise <ProductEntity>;
}


export class GetProduct implements GetProductUseCase {

    constructor(
        private readonly repository: ProductRepository
    ) {}

    execute(id: string): Promise<ProductEntity> {
        return this.repository.findById(id)
    }

}
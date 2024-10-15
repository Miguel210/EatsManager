import { CreateProductDto } from "../../dtos/product/create-product.dto";
import { UpdateProductDto } from "../../dtos/product/update-product.dto";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product/product.repository";



export interface UpdateProductUseCase {
    execute(dto: CreateProductDto): Promise <ProductEntity>;
}


export class UpdateProduct implements UpdateProductUseCase {

    constructor(
        private readonly repository: ProductRepository
    ) {}

    execute(dto: UpdateProductDto): Promise<ProductEntity> {
        return this.repository.updateById(dto)
    }

    
}
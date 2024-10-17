import { CreateproductTypeDto } from "../../dtos/productType/create-productType.dto";
import { ProductTypeEntity } from "../../entities/productType.entity";
import { ProductTypeRepository } from "../../repositories/productType/productType.repository";


export interface CreateProductTypeUseCase {
    execute(dto: CreateproductTypeDto): Promise <ProductTypeEntity>;
}

export class CreateProductType implements CreateProductTypeUseCase {

    constructor(
        private readonly repository: ProductTypeRepository
    ) {}

    execute(dto: CreateproductTypeDto): Promise<ProductTypeEntity> {
        return this.repository.create(dto)
    }
}
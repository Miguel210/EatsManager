import { ProductTypeEntity } from "../../entities/productType.entity";
import { ProductTypeRepository } from "../../repositories/productType/productType.repository";


export interface GetProductTypeUseCase {
    execute(id: string): Promise <ProductTypeEntity>;
}

export class GetProductType implements GetProductTypeUseCase {

    constructor(
        private readonly repository: ProductTypeRepository
    ) {}

    execute(id: string): Promise<ProductTypeEntity> {
        return this.repository.findById(id)
    }
}
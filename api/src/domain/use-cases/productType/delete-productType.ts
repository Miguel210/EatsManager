import { ProductTypeEntity } from "../../entities/productType.entity";
import { ProductTypeRepository } from "../../repositories/productType/productType.repository";


export interface DeleteProductTypeUseCase {
    execute(id: string): Promise <ProductTypeEntity>;
}

export class DeleteProductType implements DeleteProductTypeUseCase {

    constructor(
        private readonly repository: ProductTypeRepository
    ) {}

    execute(id: string): Promise<ProductTypeEntity> {
        return this.repository.deletebyId(id)
    }
}
import { UpdateproductTypeDto } from "../../dtos/productType/update-productType.dto";
import { ProductTypeEntity } from "../../entities/productType.entity";
import { ProductTypeRepository } from "../../repositories/productType/productType.repository";


export interface UpdateProductTypeUseCase {
    execute(dto: UpdateproductTypeDto): Promise <ProductTypeEntity>;
}

export class UpdateProductType implements UpdateProductTypeUseCase {

    constructor(
        private readonly repository: ProductTypeRepository
    ) {}

    execute(dto: UpdateproductTypeDto): Promise<ProductTypeEntity> {
        return this.repository.updatebyId(dto)
    }
}
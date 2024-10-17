import { ProductTypeEntity } from "../../entities/productType.entity";
import { ProductTypeRepository } from "../../repositories/productType/productType.repository";


export interface GetAllProductTypeUseCase {
    execute(form: any): Promise <ProductTypeEntity[]>;
}

export class GetAllProductType implements GetAllProductTypeUseCase {

    constructor(
        private readonly repository: ProductTypeRepository
    ) {}

    execute(form: any): Promise<ProductTypeEntity[]> {
        return this.repository.getAll(form)
    }
}
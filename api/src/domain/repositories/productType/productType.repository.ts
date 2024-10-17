import { CreateproductTypeDto } from "../../dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../dtos/productType/update-productType.dto";
import { ProductTypeEntity } from "../../entities/productType.entity";



export abstract class ProductTypeRepository {

    abstract create(dto: CreateproductTypeDto): Promise <ProductTypeEntity>;

    abstract getAll(form: any): Promise <ProductTypeEntity[]>;
    abstract findById(id: string): Promise <ProductTypeEntity>;
    abstract updatebyId(dto: UpdateproductTypeDto): Promise <ProductTypeEntity>;
    abstract deletebyId(id: string): Promise <ProductTypeEntity>;

}
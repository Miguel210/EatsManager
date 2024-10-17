import { ProductTypeDatasource } from "../../../domain/datasource/productType/productType.datasoruce";
import { CreateproductTypeDto } from "../../../domain/dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../../domain/dtos/productType/update-productType.dto";
import { ProductTypeEntity } from "../../../domain/entities/productType.entity";



export class ProductTypeDatasourceImpl implements ProductTypeDatasource {
    async create(dto: CreateproductTypeDto): Promise<ProductTypeEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<ProductTypeEntity[]> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<ProductTypeEntity> {
        throw new Error("Method not implemented.");
    }
    async updatebyId(dto: UpdateproductTypeDto): Promise<ProductTypeEntity> {
        throw new Error("Method not implemented.");
    }
    async deletebyId(id: string): Promise<ProductTypeEntity> {
        throw new Error("Method not implemented.");
    }

}
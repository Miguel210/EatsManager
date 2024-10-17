import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { ProductTypeDatasource } from "../../../domain/datasource/productType/productType.datasoruce";
import { CreateproductTypeDto } from "../../../domain/dtos/productType/create-productType.dto";
import { UpdateproductTypeDto } from "../../../domain/dtos/productType/update-productType.dto";
import { ProductTypeEntity } from "../../../domain/entities/productType.entity";



export class ProductTypeDatasourceImpl implements ProductTypeDatasource {
    async create(dto: CreateproductTypeDto): Promise<ProductTypeEntity> {

        const productType = await prisma.productType.create({
            data: {
                id: Uuid.uuid(),
                description: dto.description,
                useStock: dto.useStock,
                isActive: dto.isActive
            }
        });
    
        if( !productType ) throw `ProductType ${productType} not found`;

        return ProductTypeEntity.fromObject(productType)
    }
    async getAll(form: any): Promise<ProductTypeEntity[]> {
        
        const types = await prisma.productType.findMany({
            where: {
                isDelete: false
            }
        });

        if( !types ) throw `ProductType ${types} not found`;

        return types.map( types => ProductTypeEntity.fromObject(types))
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
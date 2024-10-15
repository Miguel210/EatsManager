import { prisma } from "../../../data";
import { ProductDatasource } from "../../../domain/datasource/product/product.datasource";
import { CreateProductDto } from "../../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../../domain/entities/product.entity";



export class ProductDatasourceImpl implements ProductDatasource {
    create(createProductDto: CreateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<ProductEntity[]> {
        
        console.log(form);
        
        const products = await prisma.product.findMany({
            where: {
                isDelete: false,
                
                categoryId: {
                    in: form.category || undefined
                },
                code: {
                    in: form.code || undefined
                },
                productTypeId: { 
                    in: form.productType || undefined
                },
                description: {
                    in: form.description || undefined
                },
                isActive: form.isActive,
                viewMenu: form.viewMenu
            },
            include: {
                productType:{
                    select: {
                        description: true
                    }
                },
                category: {
                    select: {
                        categoryName: true
                    }
                }
            }
        });
        //console.log(products);
        
        return products.map(product => ProductEntity.fromObject(product));
    }
    async findById(id: string): Promise<ProductEntity> {
        
        const product = await prisma.product.findFirst({
            where: {
                id: id
            }
        });
        if( !product ) throw `Supplier with id ${id} not found`;

        return ProductEntity.fromObject(product);
    }
    updateById(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<ProductEntity> {
        throw new Error("Method not implemented.");
    }

}
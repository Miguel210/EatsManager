import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { ProductDatasource } from "../../../domain/datasource/product/product.datasource";
import { CreateProductDto } from "../../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../../domain/entities/product.entity";

export class ProductDatasourceImpl implements ProductDatasource {
    async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
        const product = await prisma.product.create({
            data: {
                id: Uuid.uuid(),
                code: createProductDto.code,
                description: createProductDto.description,
                existence: createProductDto.existence,
                price: createProductDto.price,
                productTypeId: createProductDto.productTypeId,
                categoryId: createProductDto.categoryId,
                viewMenu: createProductDto.viewMenu,
                isActive: createProductDto.isActive,
                image: createProductDto.image,
            },
        });

        if (!product) throw `Product with the datas: ${product} not create`;
        return ProductEntity.fromObject(product);
    }
    async getAll(form: any): Promise<ProductEntity[]> {
        console.log(form);

        const products = await prisma.product.findMany({
            where: {
                isDelete: false,

                categoryId: {
                    in: form.category || undefined,
                },
                code: {
                    in: form.code || undefined,
                },
                productTypeId: {
                    in: form.productType || undefined,
                },
                description: {
                    in: form.description || undefined,
                },
                isActive: form.isActive,
                viewMenu: form.viewMenu,
            },
            include: {
                productType: {
                    select: {
                        description: true,
                    },
                },
                category: {
                    select: {
                        categoryName: true,
                    },
                },
            },
        });
        //console.log(products);

        return products.map((product) => ProductEntity.fromObject(product));
    }
    async findById(id: string): Promise<ProductEntity> {
        const product = await prisma.product.findFirst({
            where: {
                id: id,
                isDelete: false,
            },
            include: {
                productType: {
                    select: {
                        id: true,
                        description: true,
                        useStock: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        categoryName: true,
                    },
                },
            },
        });
        if (!product) throw `Product with id ${id} not found`;

        return ProductEntity.fromObject(product);
    }
    async updateById(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        await this.findById(updateProductDto.id);

        const product = await prisma.product.update({
            where: {
                id: updateProductDto.id,
            },
            data: {
                code: updateProductDto.code,
                description: updateProductDto.description,
                existence: updateProductDto.existence,
                price: updateProductDto.price,
                productTypeId: {
                    set: updateProductDto.productTypeId,
                },

                categoryId: {
                    set: updateProductDto.categoryId,
                },
                viewMenu: updateProductDto.viewMenu,
                isActive: updateProductDto.isActive,
                image: updateProductDto.image,
            },
        });

        console.log(product);

        return ProductEntity.fromObject(product);
    }

    async updateQuantity(form: any): Promise<ProductEntity> {
        const { quantity, id } = form;

        let data;
        
        if (quantity >= 0) {
            data = { increment: quantity };
        } else {
            const negative = quantity * -1;

            data = { decrement: negative };
        }

        const productUpd = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                existence: data,
            },
        });
        console.log('8888888888888');
        
        console.log(productUpd);
        console.log('8888888888888');

        
        
        if (!productUpd) throw `Product with id ${id} not found`;


        return ProductEntity.fromObject(productUpd);
    }

    async deleteById(id: string): Promise<ProductEntity> {
        await this.findById(id);

        const product = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                isDelete: true,
                deleteAt: new Date(),
            },
        });

        return ProductEntity.fromObject(product);
    }
}

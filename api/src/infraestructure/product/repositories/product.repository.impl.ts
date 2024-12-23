import { ProductDatasource } from "../../../domain/datasource/product/product.datasource";
import { CreateProductDto } from "../../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../../domain/entities/product.entity";
import { ProductRepository } from "../../../domain/repositories/product/product.repository";




export class ProductRepositoryImpl implements ProductRepository {

    constructor(
        private readonly datasource: ProductDatasource
    ) {}
    updateQuantity(form: any): Promise<ProductEntity> {
        return this.datasource.updateQuantity(form);
    }
    create(createProductDto: CreateProductDto): Promise<ProductEntity> {
        return this.datasource.create(createProductDto)
    }
    getAll(form: any): Promise<ProductEntity[]> {
        return this.datasource.getAll(form);
    }
    findById(id: string): Promise<ProductEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        return this.datasource.updateById(updateProductDto);
    }
    deleteById(id: string): Promise<ProductEntity> {
        return this.datasource.deleteById(id);
    }


    
}
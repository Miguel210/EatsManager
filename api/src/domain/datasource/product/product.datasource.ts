import { CreateProductDto } from "../../dtos/product/create-product.dto";
import { UpdateProductDto } from "../../dtos/product/update-product.dto";
import { ProductEntity } from "../../entities/product.entity";




export abstract class ProductDatasource {

    abstract create(createProductDto: CreateProductDto): Promise <ProductEntity>;

    abstract getAll(form: any): Promise <ProductEntity[]>;
    abstract findById(id: string): Promise <ProductEntity>;
    abstract updateById(updateProductDto: UpdateProductDto): Promise <ProductEntity>;
    abstract deleteById(id: string): Promise <ProductEntity>;


}
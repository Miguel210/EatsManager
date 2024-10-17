import { ProductTypeDatasource } from '../../../domain/datasource/productType/productType.datasoruce';
import { CreateproductTypeDto } from '../../../domain/dtos/productType/create-productType.dto';
import { UpdateproductTypeDto } from '../../../domain/dtos/productType/update-productType.dto';
import { ProductTypeEntity } from '../../../domain/entities/productType.entity';



export class ProductTypeRepositoryImpl implements ProductTypeDatasource {

    constructor(
        private readonly datasoruce: ProductTypeDatasource
    ) {}

    create(dto: CreateproductTypeDto): Promise<ProductTypeEntity> {
        return this.datasoruce.create(dto);
    }
    getAll(form: any): Promise<ProductTypeEntity[]> {
        return this.datasoruce.getAll(form);
    }
    findById(id: string): Promise<ProductTypeEntity> {
        return this.datasoruce.findById(id);
    }
    updatebyId(dto: UpdateproductTypeDto): Promise<ProductTypeEntity> {
        return this.datasoruce.updatebyId(dto);
    }
    deletebyId(id: string): Promise<ProductTypeEntity> {
        return this.datasoruce.deletebyId(id);
    }

}
import { CategoryDatasource } from "../../../domain/datasource/category/category.datasource";
import { CreateCategoryDto } from "../../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../../domain/dtos/category/update-category.dto";
import { CategoryEntity } from "../../../domain/entities/category.entity";
import { CategoryRepository } from "../../../domain/repositories/category/category.repository";




export class CategoryRepositoryImpl implements CategoryRepository {

    constructor(
        private readonly datasource: CategoryDatasource
    ) {}
    create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.datasource.create(createCategoryDto);
    }
    getAll(form: any): Promise<CategoryEntity[]> {
        return this.datasource.getAll(form);
    }
    get(id: string): Promise<CategoryEntity> {
        return this.datasource.get(id);
    }
    update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.datasource.update(updateCategoryDto);
    }
    delete(id: string): Promise<CategoryEntity> {
        return this.datasource.delete(id);
    }

    
}
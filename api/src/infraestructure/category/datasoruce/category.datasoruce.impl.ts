import { CategoryDatasource } from "../../../domain/datasource/category/category.datasource";
import { CreateCategoryDto } from "../../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../../domain/dtos/category/update-category.dto";
import { CategoryEntity } from "../../../domain/entities/category.entity";



export class CategoryDatasourceImpl implements CategoryDatasource {
    
    async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<CategoryEntity[]> {
        throw new Error("Method not implemented.");
    }
    async get(id: string): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    async update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

}
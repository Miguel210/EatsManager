import { prisma } from "../../../data";
import { CategoryDatasource } from "../../../domain/datasource/category/category.datasource";
import { CreateCategoryDto } from "../../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../../domain/dtos/category/update-category.dto";
import { CategoryEntity } from "../../../domain/entities/category.entity";



export class CategoryDatasourceImpl implements CategoryDatasource {
    
    async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<CategoryEntity[]> {
        
        const categories = await prisma.categoryProduct.findMany({
            where: {
                categoryName: {
                    in: form.categoryName || undefined
                },
                isActive: form.isActive,
                isDelete: false
            }
        });

        
        return categories.map(categories => CategoryEntity.fromObject(categories))
    }
    async get(id: string): Promise<CategoryEntity> {
        
        const category = await prisma.categoryProduct.findFirst({
            where: {
                id: id,
                isDelete: false
            }
        })

        if( !category) throw `Category with id ${id} not found`;

        return CategoryEntity.fromObject(category);
    }
    async update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

}
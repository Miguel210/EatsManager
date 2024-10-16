import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { CategoryDatasource } from "../../../domain/datasource/category/category.datasource";
import { CreateCategoryDto } from "../../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../../domain/dtos/category/update-category.dto";
import { CategoryEntity } from "../../../domain/entities/category.entity";



export class CategoryDatasourceImpl implements CategoryDatasource {
    
    async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        
        const category = await prisma.categoryProduct.create( {
            data: {
                id: Uuid.uuid(),
                categoryName: createCategoryDto.categoryName,
                isActive: createCategoryDto.isActive
            }
        });

        if( !category ) throw `Category with the datas: ${category} not create`;
        return CategoryEntity.fromObject(category)
    }
    async getAll(form: any): Promise<CategoryEntity[]> {
        
        const categories = await prisma.categoryProduct.findMany({
            where: {
                isDelete: false,
                categoryName: {
                    in: form.categoryName || undefined
                },
                isActive: form.isActive,
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
        await this.get(updateCategoryDto.id)

        const category = await prisma.categoryProduct.update({
            where: {
                id: updateCategoryDto.id
            },
            data: {
                categoryName: updateCategoryDto.categoryName,
                isActive: updateCategoryDto.isActive
            }
        });

        if( !category) throw `Category with id ${updateCategoryDto} not found`;

        return CategoryEntity.fromObject(category);
    
    }
    async delete(id: string): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

}
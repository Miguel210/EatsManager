import { CreateCategoryDto } from "../../dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../dtos/category/update-category.dto";
import { CategoryEntity } from "../../entities/category.entity";




export abstract class CategoryRepository {

    abstract create( createCategoryDto: CreateCategoryDto): Promise <CategoryEntity>;

    abstract getAll( form: any): Promise <CategoryEntity[]>;
    abstract get(id: string): Promise <CategoryEntity>;
    abstract update( updateCategoryDto: UpdateCategoryDto): Promise <CategoryEntity>;
    abstract delete(id: string): Promise <CategoryEntity>;
}
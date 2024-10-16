import { CreateCategoryDto } from "../../dtos/category/create-category.dto";
import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category/category.repository";



export interface GetCategoriesUseCase {
    execute(form: any): Promise<CategoryEntity[]>;
}

export class GetCategories implements GetCategoriesUseCase {

    constructor(
        private readonly repository: CategoryRepository
    ) {}

    execute(form: any): Promise<CategoryEntity[]> {
        return this.repository.getAll(form)
    }
}
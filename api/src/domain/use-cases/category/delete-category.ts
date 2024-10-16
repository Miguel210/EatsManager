import { CreateCategoryDto } from "../../dtos/category/create-category.dto";
import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category/category.repository";



export interface DeleteCategoryUseCase {
    execute(id: string): Promise<CategoryEntity>;
}

export class GetCategory implements DeleteCategoryUseCase {

    constructor(
        private readonly repository: CategoryRepository
    ) {}

    execute(id: string): Promise<CategoryEntity> {
        return this.repository.delete(id)
    }
}
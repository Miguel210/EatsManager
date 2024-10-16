import { UpdateCategoryDto } from "../../dtos/category/update-category.dto";
import { CategoryEntity } from "../../entities/category.entity";
import { CategoryRepository } from "../../repositories/category/category.repository";



export interface UpdateCategoryUseCase {
    execute(dto: UpdateCategoryDto): Promise<CategoryEntity>;
}

export class CreateCategory implements UpdateCategoryUseCase {

    constructor(
        private readonly repository: CategoryRepository
    ) {}

    execute(dto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.repository.update(dto)
    }
}
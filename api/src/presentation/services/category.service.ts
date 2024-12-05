import { CustomError } from "../../domain";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../domain/dtos/category/update-category.dto";
import { CreateCategory } from "../../domain/use-cases/category/create-category";
import { DeleteCategory } from "../../domain/use-cases/category/delete-category";
import { GetCategories } from "../../domain/use-cases/category/get-categories";
import { GetCategory } from "../../domain/use-cases/category/get-category";
import { UpdateCategory } from "../../domain/use-cases/category/update-category";
import { CategoryRepositoryImpl } from "../../infraestructure/category/repositories/category.datasource.impl";




export class CategoryService {

    constructor(
        readonly categoryRepository: CategoryRepositoryImpl
    ) {}


    public async create(createCategoryDto: CreateCategoryDto) {


        const category = await new CreateCategory(this.categoryRepository).execute(createCategoryDto)
        .then(category => category)
        .catch(error => console.log({error})
        );

        if(!category) throw CustomError.badRequest('Error data');

        return {
            data: category
        }

    }
    public async getAll(form: any) {

        const categories = await new GetCategories(this.categoryRepository).execute(form)
            .then(category => category)
            .catch(error => console.log({error})
        );

        if(!categories) throw CustomError.badRequest('Error data');

        return {
            data: categories
        }
    }


    public async get (id: string) {

        const category = await new GetCategory(this.categoryRepository).execute(id)
            .then(category => category)
            .catch(error => console.log({error})
        );

        if(!category) throw CustomError.badRequest('Error data');

        return {
            data: category
        }
    }

    public async update(updateCategoryDto: UpdateCategoryDto) {

        console.log(updateCategoryDto);
        
        const category = await new UpdateCategory(this.categoryRepository).execute(updateCategoryDto)
            .then(category => category)
            .catch(error => console.log({error})
        );

        if(!category) throw CustomError.badRequest('Error data');

        return {
            data: category
        }
    
    }

    public async delete(id: string) {

        const category = await new DeleteCategory(this.categoryRepository).execute(id)
            .then(category => category)
            .catch(error => console.log({error})
        );

        if(!category) throw CustomError.badRequest('Error data');

        return {
            data: category
        }
    }
}
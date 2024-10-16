import { GetCategories } from "../../domain/use-cases/category/get-categories";
import { GetCategory } from "../../domain/use-cases/category/get-category";
import { CategoryRepositoryImpl } from "../../infraestructure/category/repositories/category.datasource.impl";




export class CategoryService {

    constructor(
        readonly categoryRepository: CategoryRepositoryImpl
    ) {}

    public async getAll(form: any) {

        const categories = await new GetCategories(this.categoryRepository).execute(form)
            .then(category => category)
            .catch(error => console.log({error})
        );

        return {
            data: {
                categories
            }
            
        }
    }


    public async get (id: string) {

        const category = await new GetCategory(this.categoryRepository).execute(id)
        .then(category => category)
        .catch(error => console.log({error})
    );

        return {
            data: {
                category
            }
        }
    }
}
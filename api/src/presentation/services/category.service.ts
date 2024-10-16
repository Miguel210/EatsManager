import { CategoryRepositoryImpl } from "../../infraestructure/category/repositories/category.datasource.impl";




export class CategoryService {

    constructor(
        readonly categoryRepository: CategoryRepositoryImpl
    ) {}

    public async getAll(form: any) {


        return {
            data: 'getAll'
            
        }
    }
}
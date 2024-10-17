import { ProductTypeRepositoryImpl } from "../../infraestructure/productType/repository/productType.repository";



export class ProductTypeService {

    constructor(
        readonly repository: ProductTypeRepositoryImpl
    ) {}

    
}
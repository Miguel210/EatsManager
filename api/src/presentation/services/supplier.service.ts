import { CreateSupplierDto } from "../../domain/dtos/supplier/create-supplier.dto";
import { CreateSupplier } from "../../domain/use-cases/supplier/create-supplier";
import { SupplierRepositoryImpl } from "../../infraestructure/supplier/repository/supplier.repository.Impl";




export class SupplierService {

    constructor(
        readonly repository: SupplierRepositoryImpl
    ) {}

    public async init(dto: CreateSupplierDto){

        const supplier = await new CreateSupplier(this.repository).execute(dto)
        .then( supplier => supplier)
        .catch( error => console.log({error})
    )

        return {
            data: supplier
        }
    }
}
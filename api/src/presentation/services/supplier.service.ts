import { CreateSupplierDto } from "../../domain/dtos/supplier/create-supplier.dto";
import { CreateSupplier } from "../../domain/use-cases/supplier/create-supplier";
import { GetSupplier } from "../../domain/use-cases/supplier/get-supplier";
import { GetSuppliers } from "../../domain/use-cases/supplier/get-suppliers";
import { SupplierRepositoryImpl } from "../../infraestructure/supplier/repository/supplier.repository.Impl";




export class SupplierService {

    constructor(
        readonly repository: SupplierRepositoryImpl
    ) {}

    public async createSupplier(dto: CreateSupplierDto){

        const supplier = await new CreateSupplier(this.repository).execute(dto)
        .then( supplier => supplier)
        .catch( error => console.log({error})
    )

        return {
            data: supplier
        }
    }


    public async getAll() {

        const suppliers = await new GetSuppliers(this.repository).execute()
        .then( supplier => supplier)
        .catch( error => console.log({error}))

        return {
            data: suppliers
        }
    }

    public async getSupplier(id: string) {

        const supplier = await new GetSupplier(this.repository).execute(id)
        .then( supplier => supplier)
        .catch( error => console.log({error}))
        
        console.log(supplier);
        
        return {
            data: supplier
        }
    }

    public async delete() {

        return {
            data: "DeletedSupplier Service"
        }
    }

    public async updateSupplier() {
        
        return {
            data: "UpdateSupplier Service"
        }
    }
}
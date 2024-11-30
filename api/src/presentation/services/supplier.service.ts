import { CustomError } from "../../domain";
import { CreateSupplierDto } from "../../domain/dtos/supplier/create-supplier.dto";
import { UpdateSupplierDto } from "../../domain/dtos/supplier/update-supplier.dto";
import { CreateSupplier } from "../../domain/use-cases/supplier/create-supplier";
import { DeleteSupplier } from "../../domain/use-cases/supplier/delete-supplier";
import { GetSupplier } from "../../domain/use-cases/supplier/get-supplier";
import { GetSuppliers } from "../../domain/use-cases/supplier/get-suppliers";
import { UpdateSupplier } from "../../domain/use-cases/supplier/update-supplier";
import { SupplierRepositoryImpl } from "../../infraestructure/supplier/repository/supplier.repository.Impl";




export class SupplierService {

    constructor(
        readonly repository: SupplierRepositoryImpl
    ) {}

    public async createSupplier(dto: CreateSupplierDto){

        const supplier = await new CreateSupplier(this.repository).execute(dto)
        .then( supplier => supplier)
        .catch( error => console.log({error}))

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
        
        if(!supplier) throw CustomError.badRequest('Product already exist');
        
        
        return {
            data: supplier
        }
    }

    public async delete(id: string) {

        const supplier = await new DeleteSupplier(this.repository).execute(id)
        .then(supplier => supplier)
        .catch(error => console.log({error})
    )
        return {
            data: supplier
        }
    }

    public async updateSupplier(dto: UpdateSupplierDto) {

        const supplier = await new UpdateSupplier(this.repository).execute(dto)
        .then( supplier => supplier)
        .catch( error => console.log({error}))

        console.log(supplier);
        

        return {
            data: supplier
        }
    }
}
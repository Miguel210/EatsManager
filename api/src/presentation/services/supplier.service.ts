import { SupplierRepositoryImpl } from "../../infraestructure/supplier/repository/supplier.repository.Impl";




export class SupplierService {

    constructor(
        readonly repository: SupplierRepositoryImpl
    ) {}

    public async init(){

        return {
            data: 'GetSuppliers'
        }
    }
}
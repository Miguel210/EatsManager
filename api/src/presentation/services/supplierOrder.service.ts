import { CreateSupplierOrderDto } from '../../domain/dtos/supplierOrder/create-supplierOrder.dto';
import { UpdateSupplierOrderDto } from '../../domain/dtos/supplierOrder/update-supplierOrder.dto';
import { SupplierOrderRepositoryImpl } from '../../infraestructure/supplierOrder/repository/supplierOrder.repository.impl';



export class SupplierOrderService {

    constructor(
        private readonly repository: SupplierOrderRepositoryImpl
    ) {}

    public async create(dto: CreateSupplierOrderDto) {

    }

    public async get(id: string) {

    }

    public async getAll(form: any) {

    }

    public async update(dto: UpdateSupplierOrderDto) {

    }

    public async delete(id: string) {

    }

}
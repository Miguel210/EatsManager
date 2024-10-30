import { CreateSupplierOrderDto } from '../../domain/dtos/supplierOrder/create-supplierOrder.dto';
import { UpdateSupplierOrderDto } from '../../domain/dtos/supplierOrder/update-supplierOrder.dto';
import { CreateSupplierOrder } from '../../domain/use-cases/supplierOrder/create-supplierOrder';
import { SupplierOrderRepositoryImpl } from '../../infraestructure/supplierOrder/repository/supplierOrder.repository.impl';



export class SupplierOrderService {

    constructor(
        private readonly repository: SupplierOrderRepositoryImpl
    ) {}

    public async create(dto: CreateSupplierOrderDto) {

        const order = await new CreateSupplierOrder( this.repository ).execute(dto)
        .then( order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
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
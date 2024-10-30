import { CreateDevolutionSupplierDto } from '../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto';
import { CreateDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/create-devolutionSupplier';
import { GetDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/get-devolutionSupplier';
import { DevolutionSupplierRepositoryImpl } from '../../infraestructure/devolutionSupplier/repository/devolutionSupplier.repository.impl';



export class DevolutionSupplierService {

    constructor(
        private readonly repository: DevolutionSupplierRepositoryImpl
    ) {}

    public async create(dto: CreateDevolutionSupplierDto) {

        const devolution = await new CreateDevolutionSupplier( this.repository ).execute(dto)
        .then( dev => dev)
        .catch(error => console.log({error}))
        
        return {
            data: {
                devolution
            }
        }
    }

    public async get(id: string) {
        
        const devolution = await new GetDevolutionSupplier( this.repository ).execute(id)
        .then( dev => dev)
        .catch(error => console.log({error}))
        
        return {
            data: {
                devolution
            }
        }
    }

    public async getAll() {
        
    }

    public async update() {
        
    }

    public async delete() {
        
    }

}
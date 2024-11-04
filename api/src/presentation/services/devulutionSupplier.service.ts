import { CreateDevolutionSupplierDto } from '../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto';
import { UpdateDevolutionSupplierDto } from '../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto';
import { CreateDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/create-devolutionSupplier';
import { DeleteDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/delete-devolutionSupplier';
import { GetDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/get-devolutionSupplier';
import { GetAllDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/getAll-devolutionSupplier';
import { UpdateDevolutionSupplier } from '../../domain/use-cases/devolutionSupplier/update-devolutionSupplier';
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

    public async getAll(form: any) {
        
        const devolution = await new GetAllDevolutionSupplier( this.repository ).execute(form)
        .then( dev => dev)
        .catch(error => console.log({error}))
        
        return {
            data: {
                devolution
            }
        }
    }

    public async update(dto: UpdateDevolutionSupplierDto) {
        
        const devolution = await new UpdateDevolutionSupplier( this.repository ).execute(dto)
        .then( dev => dev)
        .catch(error => console.log({error}))
        
        return {
            data: {
                devolution
            }
        }
    }

    public async delete(id: string) {
        
        const devolution = await new DeleteDevolutionSupplier( this.repository ).execute(id)
        .then( dev => dev)
        .catch(error => console.log({error}))
        
        return {
            data: {
                devolution
            }
        }
    }

}
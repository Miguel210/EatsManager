import { CreateDevolutionClientDto } from '../../domain/dtos/devolutionClient/create-devolutionClient.dto';
import { UpdateDevolutionClientDto } from '../../domain/dtos/devolutionClient/update-devolutionClient.dto';
import { CreateDevolutionClient } from '../../domain/use-cases/devolutionClient/create-devolutionClient';
import { DeleteDevolutionClient } from '../../domain/use-cases/devolutionClient/delete-devolutionClient';
import { GetDevolutionClient } from '../../domain/use-cases/devolutionClient/get-devolutionClient';
import { GetAllDevolutionClient } from '../../domain/use-cases/devolutionClient/getAll-devolutionClient';
import { UpdateDevolutionClient } from '../../domain/use-cases/devolutionClient/update-devolutionClient';
import { DevolutionClientRepositoryImpl } from '../../infraestructure/devolutionClient/repository/devolutionClient.repository.impl';



export class DevolutionClientService {

    constructor(
        private readonly repository: DevolutionClientRepositoryImpl
    ) {}

    public async create(dto: CreateDevolutionClientDto) {

        const devolution = await new CreateDevolutionClient( this.repository ).execute(dto)
        .then( devo => devo)
        .catch(error => console.log({error})
        )

        return {
            data: {
                devolution
            }
        }
    }

    public async get(id: string) {
     
        const devolution = await new GetDevolutionClient( this.repository ).execute(id)
        .then( devo => devo)
        .catch(error => console.log({error})
        )

        return {
            data: {
                devolution
            }
        }   
    }

    public async getAll(form: any) {

        const devolution = await new GetAllDevolutionClient( this.repository ).execute(form)
        .then( devo => devo)
        .catch(error => console.log({error})
        )

        return {
            data: {
                devolution
            }
        }   
    }

    public async update(dto: UpdateDevolutionClientDto) {
        
        const devolution = await new UpdateDevolutionClient( this.repository ).execute(dto)
        .then( devo => devo)
        .catch(error => console.log({error})
        )

        return {
            data: {
                devolution
            }
        }   
    }

    public async delete(id: string) {
        
        const devolution = await new DeleteDevolutionClient( this.repository ).execute(id)
        .then( devo => devo)
        .catch(error => console.log({error})
        )

        return {
            data: {
                devolution
            }
        }
    }

}
import { CreateDevolutionClientDto } from '../../domain/dtos/devolutionClient/create-devolutionClient.dto';
import { CreateDevolutionClient } from '../../domain/use-cases/devolutionClient/create-devolutionClient';
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

    public async get() {
        
    }

    public async getAll() {
        
    }

    public async update() {
        
    }

    public async delete() {
        
    }

}
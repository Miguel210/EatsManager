import { ClientOrderEntity } from "../../entities/clientOrder.entity";
import { ClientOrderRepository } from "../../repositories/clientOrder/clientOrder.repository";


export interface GetAllClientrUseCase {
    execute(form: any): Promise<ClientOrderEntity[]>;
}


export class GetAllClientOrder implements GetAllClientrUseCase {

    constructor(
        private readonly repository: ClientOrderRepository
    ) {}
    
    execute(form: any): Promise<ClientOrderEntity[]> {
        return this.repository.getAll(form)
    }
}
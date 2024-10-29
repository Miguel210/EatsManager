import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface GetAllClientOrderDetailUseCase {
    execure(form: any): Promise<ClientOrderDetailEntity[]>
}

export class GetAllClientOrderDetail implements GetAllClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}
    
    execure(form: any): Promise<ClientOrderDetailEntity[]> {
        return this.repository.getAll(form)
    }
}
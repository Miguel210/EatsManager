import { CreateClientOrderDetailDto } from "../../dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { UpdateClientOrderDetailDto } from "../../dtos/clientOrderDetail/update-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";



export abstract class ClientOrderDetailRepository {

    abstract create(dto: CreateClientOrderDetailDto): Promise <ClientOrderDetailEntity>;

    abstract get(id: string): Promise <ClientOrderDetailEntity>;
    abstract getAll(form: any): Promise <ClientOrderDetailEntity>;
    abstract update(dto: UpdateClientOrderDetailDto): Promise <ClientOrderDetailEntity>;
    abstract delete(id: string): Promise <ClientOrderDetailEntity>;

}
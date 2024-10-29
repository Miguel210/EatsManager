import { CreateClientOrderDto } from "../../dtos/clientOrder/create-clientOrder.dto";
import { UpdateClientOrderDto } from "../../dtos/clientOrder/update-clientOrder.dto";
import { ClientOrderEntity } from "../../entities/clientOrder.entity";


export abstract class ClientOrderRepository {

    abstract create(dto: CreateClientOrderDto): Promise<ClientOrderEntity>;

    abstract get(id: string): Promise<ClientOrderEntity>;
    abstract getAll(form: any): Promise<ClientOrderEntity[]>;
    abstract update(dto: UpdateClientOrderDto): Promise<ClientOrderEntity>;
    abstract delete(id: string): Promise<ClientOrderEntity>;

}
import { UpdateMovementDetailDto } from "../movementDetail/update-movementDetail";
import { UpdateSupplierOrderDto } from "../supplierOrder/update-supplierOrder.dto";





export class UpdateMovementDto {

    constructor(
        public readonly id: string,
        public readonly documentId: string,
        public readonly amout: number,
        public readonly status: string,
        public readonly isActive: boolean,

        public readonly movementDetailDto: UpdateMovementDetailDto[],
        public readonly supplierOrders: UpdateSupplierOrderDto[],        
    ){}

    static create(props: {[key: string]: any }): [string?, UpdateMovementDto?] {
        
        const {id, documentId, amount, status, isActive, movementDetail, supplierOrders} = props;
        
        if( !id ) throw ['id is requerid']
        if( !documentId ) return ['documentId is requerid'];
        if( !amount ) return ['amount is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];

        return [undefined, new UpdateMovementDto(id, documentId, amount, status, isActive, movementDetail, supplierOrders)]
    }
}
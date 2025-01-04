import { CreateClientOrderDto } from "../clientOrder/create-clientOrder.dto";
import { CreateMovementDetailDto } from "../movementDetail/create-movementDetail";
import { CreateSupplierOrderDto } from "../supplierOrder/create-supplierOrder.dto";





export class CreateMovementDto {

    constructor(
        public readonly personId: string,
        public readonly documentId: string,
        public readonly elaborateId: string,
        public readonly amount: number,
        public readonly status: string,
        public readonly isActive: boolean,
        public readonly referenceId: string,

        public readonly MovementDetailDto: CreateMovementDetailDto[],
        public readonly SupplierOrderDto: CreateSupplierOrderDto,       
        public readonly ClientOrderDto: CreateClientOrderDto,       


        public readonly extra: string,
        public readonly isCreate: boolean,
    ){}

    static create(props: {[key: string]: any }): [string?, CreateMovementDto?] {

        let {personId, documentId, elaborateId, amount, status, isActive = true, referenceId,  MovementDetailDto, movementDetail, SupplierOrderDto, extra, ClientOrderDto, isCreate = false} = props;
        
        if( !personId ) return ['personId requerid'];
        if( !documentId ) return ['documentId requerid'];
        //if( !elaborateId ) return ['personId requerid'];
        if( !amount ) return ['amount requerid'];
        if( !status ) return ['status requerid'];
        if( isActive === undefined ) return ['isActive requerid'];
        //if( !referenceId ) return ['personId requerid'];

         MovementDetailDto = movementDetail.map( (movementDetail: { [key: string]: any; }) => CreateMovementDetailDto.create(movementDetail)[1]);
        // console.log('movementDetail');

        // console.log(movementDetail);
        // console.log('MovementDetailDto');
        // if(MovementDetailDto === undefined){ 

        //     MovementDetailDto = movementDetailDto;
            
        // }
        
        return [undefined, new CreateMovementDto(personId , documentId, elaborateId, amount, status, isActive, referenceId, MovementDetailDto, SupplierOrderDto,ClientOrderDto,extra, isCreate)]
    }
}
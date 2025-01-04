import { CreateMovementDto } from '../movement/create-movement.dto';



export class UpdateClientOrderDto {

    constructor(
        public readonly id: string,
        public readonly paymentDate: string,
        public readonly tableId: string,
        public readonly status: string,
        public readonly isActive: boolean,

        public readonly CreateMovementDto: CreateMovementDto
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateClientOrderDto?] {

        let { id , paymentDate, tableId, status, isActive = true, movement} = props;
        
        
        // if( !id ) return ['id si requerid', undefined];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !tableId ) return ['tableId is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid' ];
        
        const  [error, CreateMovementDetailDto] = CreateMovementDto.create({...movement, personId: movement.personId, extra: 'clientOrder', ClientOrderDto: {id, paymentDate, tableId, status, isActive}});
        // if(error) return [`Este es un error mvoement ${error}`];
        console.log('props');
        
        movement = CreateMovementDetailDto!;
        console.log(error);
        
        console.log('props');

        return [undefined, new UpdateClientOrderDto( id, paymentDate, tableId, status, isActive, CreateMovementDetailDto!)];

    }
}
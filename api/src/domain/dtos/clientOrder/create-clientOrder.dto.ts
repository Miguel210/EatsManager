


export class CreateClientOrderDto {

    constructor(
        public readonly id: string,
        public readonly movementId: string,
        public readonly inoiceFolio: string,
        public readonly tableId: string,
        public readonly paymentDate: Date,
        public readonly status: string,

        public readonly movement: string
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateClientOrderDto?] {

        const {id = 'NOId',movementId, inoiceFolio, tableId, paymentDate, status, movement} = props;

        if( !movementId ) return ['id is requerid'];
        if( !inoiceFolio ) return ['inoiceFolio is requerid'];
        if( !tableId ) return ['tableId is requerid'];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];

        return [undefined, new CreateClientOrderDto(id,movementId, inoiceFolio, tableId, paymentDate, status, movement)];

    }
}
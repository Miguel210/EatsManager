


export class CreateClientOrderDto {

    constructor(
        public readonly movementId: string,
        public readonly inoiceFolio: string,
        public readonly tableId: string,
        public readonly paymentDate: Date,
        public readonly status: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateClientOrderDto?] {

        const {movementId, inoiceFolio, tableId, paymentDate, status} = props;

        if( !movementId ) return ['id is requerid'];
        if( !inoiceFolio ) return ['inoiceFolio is requerid'];
        if( !tableId ) return ['tableId is requerid'];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];

        return [undefined, new CreateClientOrderDto(movementId, inoiceFolio, tableId, paymentDate, status)];

    }
}
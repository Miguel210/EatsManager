


export class CreateSupplierOrderDto {

    constructor(
        public readonly movementId: string,
        public readonly inoiceFolio: string,
        public readonly paymentDate: Date,
        public readonly status: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateSupplierOrderDto?] {

        const {movementId, inoiceFolio, paymentDate, status} = props;

        if( !movementId ) return ['id is requerid'];
        if( !inoiceFolio ) return ['inoiceFolio is requerid'];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];

        return [undefined, new CreateSupplierOrderDto(movementId, inoiceFolio, paymentDate, status)];

    }
}
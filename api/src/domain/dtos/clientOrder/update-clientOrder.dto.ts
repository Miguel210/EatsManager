


export class UpdateClientOrderDto {

    constructor(
        public readonly id: string,
        public readonly paymentDate: Date,
        public readonly tableId: string,
        public readonly status: string,
        public readonly isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateClientOrderDto?] {

        const { id, paymentDate, tableId, status, isActive} = props;

        if( !id ) return ['id si requerid'];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !tableId ) return ['tableId is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateClientOrderDto( id, paymentDate, tableId, status, isActive)];

    }
}
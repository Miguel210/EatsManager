


export class UpdateClientOrderDto {

    constructor(
        public readonly paymentDate: Date,
        public readonly tableId: string,
        public readonly status: string,
        public readonly isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateClientOrderDto?] {

        const { paymentDate, tableId, status, isActive} = props;

        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !tableId ) return ['tableId is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateClientOrderDto( paymentDate, tableId, status, isActive)];

    }
}
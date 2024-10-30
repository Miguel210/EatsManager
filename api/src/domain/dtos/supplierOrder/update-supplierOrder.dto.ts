


export class UpdateSupplierOrderDto {

    constructor(
        public readonly id: string,
        public readonly paymentDate: Date,
        public readonly status: string,
        public readonly isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateSupplierOrderDto?] {

        const { id, paymentDate, status, isActive} = props;

        if( !id ) return ['id is requerid']
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateSupplierOrderDto(id, paymentDate, status, isActive)];

    }
}
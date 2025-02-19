


export class UpdateDevolutionSupplierDto {

    constructor(
        public readonly id: string,
        public readonly paymentDate: Date,
        public readonly status: string,
        public readonly isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateDevolutionSupplierDto?] {

        const { id, paymentDate, status, isActive} = props;

        if( !id ) return ['id is requerid'];
        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateDevolutionSupplierDto(id, paymentDate, status, isActive)];

    }
}
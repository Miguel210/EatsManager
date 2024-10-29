


export class UpdateDevolutionClientDto {

    constructor(
        public readonly paymentDate: Date,
        public readonly status: string,
        public readonly isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateDevolutionClientDto?] {

        const { paymentDate, status, isActive} = props;

        if( !paymentDate ) return ['paymentDate is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateDevolutionClientDto( paymentDate, status, isActive)];

    }
}




export class UpdatePaymentDto {

    constructor(
        public id: string,
        public amount: number,
        public typePaymentId: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdatePaymentDto?] {

        const {id, amount, typePaymentId, isActive } = props;

        if( !id ) return ['id is Requerid'];
        if( !amount ) return ['amount is Requerid'];
        if( !typePaymentId ) return ['typePaymentId is Requerid'];
        if( isActive === undefined ) return ['isActive is Requerid'];


        return [undefined, new UpdatePaymentDto(id, amount, typePaymentId, isActive)];
    }
}
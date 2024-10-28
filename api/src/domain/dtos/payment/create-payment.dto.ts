



export class CreatePaymentDto {

    constructor(
        public orderpaymentId: string,
        public amount: number,
        public typePaymentId: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, CreatePaymentDto?] {

        const {orderpaymentId, amount, typePaymentId } = props;

        if( !orderpaymentId ) return ['orderpaymentId is Requerid'];
        if( !amount ) return ['amount is Requerid'];
        if( !typePaymentId ) return ['typePaymentId is Requerid'];

        return [undefined, new CreatePaymentDto(orderpaymentId, amount, typePaymentId)];
    }
}
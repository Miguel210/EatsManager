

export class CreateOrderpaymentDto {

    constructor(
        public movementId: string,
        public amount: string,
        public status: string
    ) {}

    static create(props: {[key_: string]: any}): [string?, CreateOrderpaymentDto?] {

        const {movementId, amount, status} = props;

        if( !movementId ) return ['movementId is Requerid'];
        if( !amount ) return ['amount is Requerid'];
        if( !status ) return ['status is Requerid'];

        return [undefined, new CreateOrderpaymentDto(movementId, amount, status)]
    }
}
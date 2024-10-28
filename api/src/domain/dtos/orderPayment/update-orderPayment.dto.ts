

export class UpdateOrderpaymentDto {

    constructor(
        public id: string,
        public amount: string,
        public status: string,
        public isActive: boolean
    ) {}

    static create(props: {[key_: string]: any}): [string?, UpdateOrderpaymentDto?] {

        const {id, amount, status, isActive} = props;

        if( !id ) return ['movementId is Requerid'];
        if( !amount ) return ['amount is Requerid'];
        if( !status ) return ['status is Requerid'];
        if( isActive === undefined ) return ['isActive is Requerid'];

        return [undefined, new UpdateOrderpaymentDto(id, amount, status, isActive)]
    }
}
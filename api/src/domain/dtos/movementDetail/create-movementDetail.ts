

export class CreateMovementDetailDto {

    constructor(
        public movementId: string,
        public quantity: number,
        public productId: string,
        public priceUnit: number,
        public subtotal: number,
        public tax: number,
        public total: number,
        public costUnit: number,
        public promotionId: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateMovementDetailDto?] {

        const {movementId, quantity, productId, priceUnit, subtotal, tax, total, costUnit, promotionId} = props;
    
        if( !movementId) return ['movementId is Requerid'];
        if( !quantity) return ['quantity is Requerid'];
        if( !productId) return ['productId is Requerid'];
        if( !priceUnit) return ['priceUnit is Requerid'];
        if( !subtotal) return ['subtotal is Requerid'];
        if( !tax) return ['tax is Requerid'];
        if( !total) return ['total is Requerid'];
        if( !costUnit) return ['costUnit is Requerid'];
        if( !promotionId) return ['promotionId is Requerid'];

        return[undefined, new CreateMovementDetailDto(movementId, quantity, productId, priceUnit, subtotal, tax, total, costUnit, promotionId)]
    }
}
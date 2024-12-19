

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

        const {movementId, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId} = props;
        
        if( !movementId) return ['movementId is Requerid'];
        if( quantity === undefined) return ['quantity is Requerid'];
        if( !productId && product) return ['productId is Requerid'];
        if( priceUnit === undefined) return ['priceUnit is Requerid'];
        if( subTotal === undefined) return ['subtotal is Requerid'];
        if( tax === undefined) return ['tax is Requerid'];
        if( total === undefined) return ['total is Requerid'];
        if( costUnit === undefined) return ['costUnit is Requerid'];
        //if( !promotionId) return ['promotionId is Requerid'];
        
        return[undefined, new CreateMovementDetailDto(movementId, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId)]
    }
}
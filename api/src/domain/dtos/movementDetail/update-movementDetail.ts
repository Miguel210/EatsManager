

export class UpdateMovementDetailDto {

    constructor(
        public id: string,
        public quantity: number,
        public productId: string,
        public priceUnit: number,
        public subtotal: number,
        public tax: number,
        public total: number,
        public costUnit: number,
        public promotionId: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateMovementDetailDto?] {

        const {id, quantity, productId, priceUnit, subtotal, tax, total, costUnit, promotionId, isActive} = props;
    
        if( !id) return ['id is Requerid'];
        if( isActive === undefined) return ['movementId is Requerid'];
        if( !quantity) return ['quantity is Requerid'];
        if( !productId) return ['productId is Requerid'];
        if( !priceUnit) return ['priceUnit is Requerid'];
        if( !subtotal) return ['subtotal is Requerid'];
        if( !tax) return ['tax is Requerid'];
        if( !total) return ['total is Requerid'];
        if( !costUnit) return ['costUnit is Requerid'];
        if( !promotionId) return ['promotionId is Requerid'];

        return[undefined, new UpdateMovementDetailDto(id, quantity, productId, priceUnit, subtotal, tax, total, costUnit, promotionId, isActive)]
    }
}
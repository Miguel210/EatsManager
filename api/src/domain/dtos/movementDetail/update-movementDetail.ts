

export class UpdateMovementDetailDto {

    constructor(
        public id: string,
        public quantity: number,
        public productId: string,
        public priceUnit: number,
        public subTotal: number,
        public tax: number,
        public total: number,
        public costUnit: number,
        public promotionId: string,
        public isActive: boolean,
        public product: {id: string, description: string}
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateMovementDetailDto?] {

        const {id, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive = true} = props;

        if( !id) return ['id is Requerid'];
        if( isActive === undefined) return ['isActive is Requerid'];
        if( !quantity) return ['quantity is Requerid'];
        if( !productId) return ['productId is Requeride'];
        if( !priceUnit) return ['priceUnit is Requerid'];
        if( !subTotal) return ['subTotal is Requerid'];
        if( !tax) return ['tax is Requerid'];
        if( !total) return ['total is Requerid'];
        if( !costUnit) return ['costUnit is Requerid'];
      //  if( !promotionId) return ['promotionId is Requerid'];

        return[undefined, new UpdateMovementDetailDto(id, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive,product)]
    }
}
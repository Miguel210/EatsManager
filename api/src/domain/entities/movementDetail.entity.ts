import { CustomError } from "../errors/custom.error";



export class MovementDetailEntity {

    constructor(
        public id: string,
        public movementId: string,
        public quantity: number,
        public productId: string,
        public priceUnit: number,
        public subTotal: number,
        public tax: number,
        public total: number,
        public costUnit: number,
        public promotionId: string,
        public isActive: boolean
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, movementId, movement, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, promotion, isActive} = object;
        
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !movementId && !movement ) throw CustomError.badRequest('Missing movementId');
        if( quantity === undefined ) throw CustomError.badRequest('Missing quantity');
        if( !productId && !product ) throw CustomError.badRequest('Missing productId');
        if( priceUnit === undefined ) throw CustomError.badRequest('Missing priceUnit');
        if( subTotal === undefined) throw CustomError.badRequest('Missing subTotal');
        if( tax === undefined) throw CustomError.badRequest('Missing tax');
        if( total === undefined) throw CustomError.badRequest('Missing total');
        if( costUnit === undefined) throw CustomError.badRequest('Missing costUnit');
       // if( !promotionId && promotion ) throw CustomError.badRequest('Missing promotionId');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new MovementDetailEntity(id, movementId || movement, quantity, productId || product, priceUnit, subTotal, tax, total, costUnit, promotionId || promotion, isActive)
    }
}
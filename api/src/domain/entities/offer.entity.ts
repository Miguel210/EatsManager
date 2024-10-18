import { CustomError } from "../errors/custom.error"



export class OfferEntity {

    constructor(
        public id: string,
        public productId: string,
        public price: number,
        public from: Date,
        public until: Date,
        public isActive: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, productId, product, price, from, until, isActive} = object
    
        if( !id ) throw CustomError.badRequest('Missing id offer');

        if( !productId && !product ) throw CustomError.badRequest('Missing productId or product');
        if( !price ) throw CustomError.badRequest('Missing price');
        if( !from ) throw CustomError.badRequest('Missing from (date)');
        if( !until ) throw CustomError.badRequest('Missing until (date)');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new OfferEntity(id, productId || product, price, from, until, isActive)
    }
}
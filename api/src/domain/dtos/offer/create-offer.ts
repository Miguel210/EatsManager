export class CreateOfferDto{

    private constructor(
        public readonly productId: string,
        public readonly price: number,
        public readonly from: Date,
        public readonly until: Date,
        public readonly isActive: boolean
    ) {}

    static fromObject(props: {[key: string]: any}): [string?, CreateOfferDto?] {

        const {productId, price, from, until, isActive} = props
        
        if( !productId ) return ['ProductId is requerid'];
        if( !price ) return ['Price is requerid'];
        if( from === undefined ) return ['From (date) is requerid'];
        if( until === undefined ) return ['Until (date) is requerid'];
        if( isActive === undefined ) return ['IsActive is requerid'];
        
        return [undefined, new CreateOfferDto(productId , price, new Date(from), new Date(until), isActive)]
    }
}
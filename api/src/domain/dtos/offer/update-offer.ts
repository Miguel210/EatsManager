export class UpdateOfferDto{

    private constructor(
        public readonly id: string,
        public readonly productId: string,
        public readonly price: number,
        public readonly from: Date,
        public readonly until: Date,
        public readonly isActive: boolean
    ) {}

    static fromObject(props: {[key: string]: any}): [string?, UpdateOfferDto?] {

        const {id, productId, price, from, until, isActive} = props
    
        if( !id ) return ['Id is requerid'];
        if( !productId ) return [''];
        if( !price ) return ['Price is requerid'];
        if( !from ) return ['From (date) is requerid'];
        if( !until ) return ['Until (date) is requerid'];
        if( isActive === undefined ) return ['IsActive is requerid'];

        return [undefined, new UpdateOfferDto(id, productId , price, from, until, isActive)]
    }
}
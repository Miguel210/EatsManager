


export class UpdateProductDto {

    private constructor(
        public readonly id: string,
        public readonly code: string,
        public readonly description: string,
        public readonly existence: number,
        public readonly price: number,
        public readonly productTypeId: string,
        public readonly categoryId: string,
        public readonly viewMenu: boolean,
        public readonly isActive: boolean,
        public readonly image: string
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateProductDto?] {
        const {id, code, description, existence, price, productTypeId, category, viewMenu, isActive, image } = props

        if( !id ) return ['Id must be a valid', undefined]
        if( !code ) return ['Code is requerid',undefined];
        if( !description ) return ['description is requerid',undefined];
        if( !existence ) return ['existence is requerid',undefined];
        if( !price ) return ['price is requerid',undefined];
        if( !productTypeId ) return ['product type is requerid',undefined];
        if( !category ) return ['category is requerid',undefined];
        if( !viewMenu ) return ['view Menu is requerid',undefined];
        if( !isActive ) return ['isActive is requerid',undefined];


        return [undefined, new UpdateProductDto( id, code, description, existence, price, productTypeId, category, viewMenu, isActive, image)]
    }
}
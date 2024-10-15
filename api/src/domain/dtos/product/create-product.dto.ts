


export class CreateProductDto {

    private constructor(
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

    static create(props: {[key: string]: any}): [string?, CreateProductDto?] {
        const {code, description, existence, price, productTypeId, categoryId, viewMenu = false, isActive = true, image } = props

        if( !code ) return ['Code is requerid',undefined];
        if( !description ) return ['description is requerid',undefined];
        if(  existence === undefined ) return ['existence is requerid',undefined];
        if( price === undefined ) return ['price is requerid',undefined];
        if( !productTypeId ) return ['product type is requerid',undefined];
        if( !categoryId ) return ['category is requerid',undefined];
        if( viewMenu === undefined ) return ['view Menu is requerid',undefined];
        if( isActive === undefined ) return ['isActive is requerid',undefined];


        return [undefined, new CreateProductDto( code, description, existence, price, productTypeId, categoryId, viewMenu, isActive, image)]
    }
}
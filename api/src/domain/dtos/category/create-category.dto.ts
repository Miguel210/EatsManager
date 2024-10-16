


export class CreateCategoryDto {

    private constructor(
        public categoryName: string,
        public isActive: boolean
     ) {}

     static create(props: {[key: string]: any}): [string?, CreateCategoryDto?] {

        const {categoryName, isActive} = props;

        if( !categoryName ) return ['Missing categoryName'];
        if( isActive === undefined ) return ['Missing isActive']

        return [undefined, new CreateCategoryDto(categoryName, isActive)];
     }
}
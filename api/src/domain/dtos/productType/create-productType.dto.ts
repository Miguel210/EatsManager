


export class CreateproductTypeDto {

    private constructor(
        public readonly description: string,
        public readonly isActive: boolean,
        public readonly useStock: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateproductTypeDto?] {

        const {description, isActive, useStock} = props;

        if( !description ) return ['Missing description'];
        if( isActive === undefined ) return ['Missing isActive'];
        if( useStock === undefined ) return ['Missing useStock']

        return [undefined, new CreateproductTypeDto(description, isActive, useStock)];
    }
}
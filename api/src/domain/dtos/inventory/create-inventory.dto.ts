


export class CreateInventoryDto {

    private constructor(
        public movementId: string,
        public product: string,
        public quantity: number
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateInventoryDto?] {

        const {movementId, product, quantity} = props;

        if( !movementId ) return ['Missing movementId'];
        if( !product ) return ['Missing productId'];
        if( !quantity ) return ['Missing quantity'];

        return [undefined, new CreateInventoryDto(movementId, product, quantity)]
    }
}
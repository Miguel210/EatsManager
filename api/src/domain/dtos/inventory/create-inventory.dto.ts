


export class CreateInventoryDto {

    private constructor(
        public movementId: string,
        public productId: string,
        public quantity: number
    ) {}

    static create(props: {[key: string]: any}) {

        const {movementId, productId, quantity} = props;

        if( !movementId ) return ['Missing movementId'];
        if( !productId ) return ['Missing productId'];
        if( !quantity ) return ['Missing quantity'];

        return [undefined, new CreateInventoryDto(movementId, productId, quantity)]
    }
}
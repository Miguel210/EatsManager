import { CustomError } from "../errors/custom.error";




export class InventoryEntity {

    constructor(
        public id: string,
        public movement: string,
        public product: string,
        public quantity: number,
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, movement, product, quantity} = object


        if( !id ) throw CustomError.badRequest('Missig inventory');

        if( !movement ) throw CustomError.badRequest('Missing movementId');
        if( !product ) throw CustomError.badRequest("Missing productId");
        if( !quantity ) throw CustomError.badRequest('Missing quantity');

         return new InventoryEntity(id, movement, product, quantity);
    }
}
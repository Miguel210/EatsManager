import { CustomError } from "../errors/custom.error";




export class InventoryEntity {

    constructor(
        public id: string,
        public movementId: string,
        public productId: string,
        public quantity: number,
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, movementId, productId, quantity} = object


        if( !id ) throw CustomError.badRequest('Missig inventory');

        if( !movementId ) throw CustomError.badRequest('Missing movementId');
        if( !productId ) throw CustomError.badRequest("Missing productId");
        if( !quantity ) throw CustomError.badRequest('Missing quantity');

         return new InventoryEntity(id, movementId, productId, quantity);
    }
}
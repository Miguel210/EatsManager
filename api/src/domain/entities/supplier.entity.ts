import { CustomError } from "../errors/custom.error";



export class SupplierEntity {
    
    constructor(
        public id: string,
        public personId: string
    ){}


    static fromObj(object: {[key: string]: any}) {

        const {id, personId, isActive} = object;

        if( !id ) throw CustomError.badRequest('Missing id');

        if( !personId ) throw CustomError.badRequest('Missing personId');
        if( isActive===false ) throw CustomError.badRequest('Not exist');

        return new SupplierEntity(id, personId);
    }
}
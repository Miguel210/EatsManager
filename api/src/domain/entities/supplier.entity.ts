import { CustomError } from "../errors/custom.error";



export class SupplierEntity {
    
    constructor(
        public id: string,
        public person: string
    ){}


    static fromObj(object: {[key: string]: any}) {

        const {id, person, isActive} = object;

        if( !id ) throw CustomError.badRequest('Missing id');

        if( !person ) throw CustomError.badRequest('Missing personId');
        if( isActive===false ) throw CustomError.badRequest('Not exist');

        return new SupplierEntity(id, person);
    }
}
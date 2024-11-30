import { CustomError } from "../errors/custom.error";



export class SupplierEntity {
    
    constructor(
        public id: string,
        public personId: string,
        public isActive: boolean,
        public person: string
    ){}


    static fromObj(object: {[key: string]: any}) {

        const {id, person, personId, isActive} = object;

        if( !id ) throw CustomError.badRequest('Missing id');

        if( !person ) throw CustomError.badRequest('Missing person or person');
        if( !personId ) throw CustomError.badRequest('Missing personId or person');

        if( isActive === undefined ) throw CustomError.badRequest('Not exist isActive in supplierEntity');

        return new SupplierEntity(id, personId, isActive, person);
    }
}
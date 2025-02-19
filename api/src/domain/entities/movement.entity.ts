import { CustomError } from "../errors/custom.error"



export class MovementEntity {

    constructor(
        public id: string,
        public personId: string,
        public documentId: string,
        public elaborateId: string,
        public amount: number,
        public status: string,
        public isActive: boolean,
        public referenceId: string,
        public date: Date,
        public movementDetail: string[],
        public supplierOrders: string
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, personId, person, documentId, document, elaborateId, employees, elaborate, amount, status, isActive, referenceId, reference, date, movementDetail, supplierOrders} = object
        
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !personId && !person ) throw CustomError.badRequest('Missing personId');
        if( !documentId && !document ) throw CustomError.badRequest('Missing documentId');
        if( !elaborateId && !employees && undefined ) throw CustomError.badRequest('Missing elaborateId');
        if( !amount ) throw CustomError.badRequest('Missing amount');
        if( !status ) throw CustomError.badRequest('Missing status');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');
        if( !referenceId && !reference && undefined) throw CustomError.badRequest('Missing referenceId');
        if( date === undefined ) throw CustomError.badRequest('Missing date');

        return new MovementEntity(id, personId || person, documentId || document, elaborateId || employees, amount, status, isActive, referenceId || reference, date, movementDetail, supplierOrders);
    }
}
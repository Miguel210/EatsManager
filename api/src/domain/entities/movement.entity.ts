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
        public date: Date
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, personId, person, documentId, document, elaborateId, elaborate, amount, status, isActive, referenceId, reference, date} = object

        if( !id ) throw CustomError.badRequest('Missing ');
        if( !personId || !person ) throw CustomError.badRequest('Missing ');
        if( !documentId || !document ) throw CustomError.badRequest('Missing ');
        //if( !elaborateId || !elaborate ) throw CustomError.badRequest('Missing ');
        if( !amount ) throw CustomError.badRequest('Missing ');
        if( !status ) throw CustomError.badRequest('Missing ');
        if( isActive === undefined ) throw CustomError.badRequest('Missing ');
        if( !referenceId || reference) throw CustomError.badRequest('Missing ');
        if( date === undefined ) throw CustomError.badRequest('Missing ');

        return new MovementEntity(id, personId || person, documentId || document, elaborateId || elaborate, amount, status, isActive, referenceId || reference, date);
    }
}
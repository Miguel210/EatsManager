import { CustomError } from "../errors/custom.error";




export class DocumentEntity {



    constructor(
        public id: string,
        public description: string,
        public isActive: boolean,
        public folio: number
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, isActive, description, folio} = object;
        
        if( !id ) throw CustomError.badRequest('Missing id');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');
        if( !description ) throw CustomError.badRequest('Missing description');
        if( !folio ) throw CustomError.badRequest('Missing folio');

        return new DocumentEntity(id, description, isActive, folio);
    }
}
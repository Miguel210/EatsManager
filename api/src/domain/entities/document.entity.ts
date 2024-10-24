import { CustomError } from "../errors/custom.error";




export class DocumentEntity {



    constructor(
        public id: string,
        public description: string,
        public isActive: boolean,
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, isActive, description} = object;

        if( !id ) throw CustomError.badRequest('Missing id');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');
        if( !description ) throw CustomError.badRequest('Missing description');

        return new DocumentEntity(id, isActive, description);
    }
}
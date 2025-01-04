import { CustomError } from "../errors/custom.error";



export class TableEntity {

    constructor(
        public id: string,
        public description: string,
        public status: string,
        public mainTable: string,
        public isActive: boolean,

        public clientOrder: string
    ) {}

    static fromObject(object: {[key:string]: any}) {

        const {id, description, status, mainTable, isActive, clientOrder} = object;

        if( !id ) throw CustomError.badRequest('Missing id');
        if( !description ) throw CustomError.badRequest('Missing description');
        if( !status ) throw CustomError.badRequest('Missing status');
        //if( !id ) throw CustomError.badRequest('Missing id');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new TableEntity(id, description, status, mainTable, isActive, clientOrder);
    }
}
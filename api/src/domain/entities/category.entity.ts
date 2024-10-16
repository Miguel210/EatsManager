import { CustomError } from "../errors/custom.error";




export class CategoryEntity {


    constructor(
        public id: string,
        public categoryName: string,
        public isActive: boolean,
        public isDelete: boolean,
        public deleteAt: Date
    ) {}

    static fromObject(object: {[ket: string]: any}) {

       const {id, categoryName, isActive, deleteAt, isDelete} = object; 
        
       if( !id ) throw CustomError.badRequest('Missing id Category');

       if( !categoryName ) throw CustomError.badRequest("Missing categoryName");
       if( isActive === undefined ) throw CustomError.badRequest("Missing isActive");
       if( isDelete === undefined ) throw CustomError.badRequest("Missing isDelete");

        return new CategoryEntity(id, categoryName, isActive, deleteAt, isDelete);
    }

}
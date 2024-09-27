import { CustomError } from "../errors/custom.error";




export class OperationEntity {

    constructor(
        public id: string,
        public name: string
    ){}

    static fromObject(object: {[key: string]: any})  {
        const {id, name} = object;

        if( !id ) throw CustomError.badRequest('Missing id Operation')
        
            if( !name ) throw CustomError.badRequest('!Missing name Operation')
        return new OperationEntity(id, name)
    }


}
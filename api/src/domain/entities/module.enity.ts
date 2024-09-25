import { CustomError } from "../errors/custom.error";



export class ModuleEntity {

    constructor(
        public id: string,
        public name: string
    ){}

    static fromObject(object: {[key: string]: any}) {
        const {id, name} = object;

        if( !id ){
            throw CustomError.badRequest('Missing id Module');
        }

        if( !name ) throw CustomError.badRequest('!Missing name Module');

        return new ModuleEntity(id, name);
    }
}

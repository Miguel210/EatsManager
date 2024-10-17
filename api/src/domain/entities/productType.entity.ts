import { CustomError } from "../errors/custom.error";



export class ProductTypeEntity {

    constructor(
        public id: string,
        public description: string,
        public isActive: boolean,
        public useStock: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, description, isActive, useStock} = object;

        if( !id ) throw CustomError.badRequest('Missing id producttype');

        if( !description) throw CustomError.badRequest('Missing description');
        if( isActive === undefined) throw CustomError.badRequest('Missing isActive');
        if( useStock === undefined) throw CustomError.badRequest('Missing useStock');

        return new ProductTypeEntity(id, description, isActive, useStock);

    }
}
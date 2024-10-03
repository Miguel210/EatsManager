import { CustomError } from "../errors/custom.error";




export class MetricEntity {

    constructor(
        public id: string,
        public operationId: string,
        public name: string,
        public sentence: string,
    ){}

    static fromObject(object: {[key: string]: any}){
        const {id,operationId, name, sentence, isActive} = object; 

        if( !id ) throw CustomError.badRequest('Missing id Metric');

        if( !name ) throw CustomError.badRequest('Missing name Metric')
        if( !operationId ) throw CustomError.badRequest('Missing operationId')
        if( !name ) throw CustomError.badRequest('Missing name')
        if( !sentence ) throw CustomError.badRequest('Missing sentence')
        if( isActive===false ) throw CustomError.badRequest('isent exist')


        return new MetricEntity(id, operationId,name,sentence)
    }
}
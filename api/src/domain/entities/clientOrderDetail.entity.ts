import { CustomError } from "../errors/custom.error";



export class ClientOrderDetailEntity {

    constructor(
        public id: string,
        public clientOrderId: string,
        public garrisonId: string,
        public isActive: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, clientOrderId, garrisonId, isActive} = object;

        if( !id ) throw CustomError.badRequest('Missing id');
        if( !clientOrderId ) throw CustomError.badRequest('Missing clientOrderId');
        if( !garrisonId ) throw CustomError.badRequest('Missing garrisonId');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new ClientOrderDetailEntity(id, clientOrderId, garrisonId, isActive);
    }
}
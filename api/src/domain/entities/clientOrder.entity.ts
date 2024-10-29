import { CustomError } from "../errors/custom.error";



export class ClientOrderEntity{

    constructor(
        public id: string,
        public movementId: string,
        public invoiceFolio: string,
        public tableId: string,
        public paymentDate: Date,
        public status: string,
        public isActive: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, movementId, movement, invoiceFolio, tableId, table, paymentDate, status, isActive} = object;
    
        if( !id ) CustomError.badRequest('Missing id');
        if( !movementId && !movement ) CustomError.badRequest('Missing movementId');
        if( !invoiceFolio ) CustomError.badRequest('Missing invoiceFolio');
        if( !tableId && table ) CustomError.badRequest('Missing tableId');
        if( !paymentDate ) CustomError.badRequest('Missing paymentDate');
        if( !status ) CustomError.badRequest('Missing status');
        if( isActive === undefined ) CustomError.badRequest('Missing isActive');

        return new ClientOrderEntity(id, movementId || movement, invoiceFolio, tableId || table, paymentDate, status, isActive);
    }
}
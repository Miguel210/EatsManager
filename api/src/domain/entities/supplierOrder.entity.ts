import { CustomError } from "../errors/custom.error";





export class SupplierOrderEntity{

    constructor(
        public id: string,
        public movementId: string,
        public invoiceFolio: string,
        public paymentDate: Date,
        public status: string,
        public isActive: boolean
    ) {}

    static create(object: {[key: string]: any}) {

        const {id, movementId, movement, invoiceFolio, paymentDate, status, isActive} = object;
    
        if( !id ) CustomError.badRequest('Missing id');
        if( !movementId && !movement ) CustomError.badRequest('Missing movementId');
        if( !invoiceFolio ) CustomError.badRequest('Missing invoiceFolio');
        if( !paymentDate ) CustomError.badRequest('Missing paymentDate');
        if( !status ) CustomError.badRequest('Missing status');
        if( isActive === undefined ) CustomError.badRequest('Missing isActive');

        return new SupplierOrderEntity(id, movementId || movement, invoiceFolio, paymentDate, status, isActive);
    }
}
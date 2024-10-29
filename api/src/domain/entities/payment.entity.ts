import { CustomError } from '../errors/custom.error';



export class PaymentEntity {

    constructor(
        public id: string,
        public orderPaymentId: string,
        public amount: number,
        public typePaymentId: string,
        public isActive: boolean,
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, orderPaymentId, orderpayment, amount, typePaymentId, typePayment, isActive} = object;
    
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !orderPaymentId && !orderpayment) throw CustomError.badRequest('Missing OrderpaymentId');
        if( !amount ) throw CustomError.badRequest('Missing amount ');
        if( !typePaymentId && !typePayment ) throw CustomError.badRequest('Missing ');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new PaymentEntity(id, orderPaymentId || orderpayment, amount, typePaymentId || typePayment, isActive);
    }
}
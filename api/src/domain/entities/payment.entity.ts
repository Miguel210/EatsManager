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

        const {id, OrderpaymentId, Orderpayment, amount, typePaymentId, typePayment, isActive} = object;
    
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !OrderpaymentId || !Orderpayment) throw CustomError.badRequest('Missing ');
        if( !amount ) throw CustomError.badRequest('Missing ');
        if( !typePaymentId || !typePayment ) throw CustomError.badRequest('Missing ');
        if( !isActive ) throw CustomError.badRequest('Missing ');

        return new PaymentEntity(id, OrderpaymentId || Orderpayment, amount, typePaymentId || typePayment, isActive);
    }
}
import { CustomError } from "../errors/custom.error";



export class OrderpaymentEntity {

    constructor(
        public id: string,
        public movementId: string,
        public amount: number,
        public status: string,
        public isActive: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, movementId, movement, amount, status, isActive} = object;

        if( !id ) throw CustomError.badRequest('Misssing id');
        if( !movementId && movement ) throw CustomError.badRequest('Misssing movementId');
        if( !amount ) throw CustomError.badRequest('Misssing amount');
        if( !status ) throw CustomError.badRequest('Misssing status');
        if( !isActive ) throw CustomError.badRequest('Misssing isActive');

        return new OrderpaymentEntity(id, movementId || movement, amount, status, isActive);
    }
}
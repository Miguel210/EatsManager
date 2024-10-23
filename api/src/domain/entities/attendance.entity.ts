import { CustomError } from "../errors/custom.error";




export class AttendanceEntity {

    constructor(
        public id: string,
        public employeeId: string,
        public date: Date,
        public hour: Date,
        public documentId: string,
        public isActive: boolean
    ) {}


    static fromObject(object: {[key: string]: any}) {

        const {id, employee, employeeId, date, hour, document, documentId, isActive} = object;
        console.log(object);
        
        if( !id ) throw CustomError.badRequest('Missing id attendance');

        if( !employeeId && !employee ) throw CustomError.badRequest('Missing employeeId or employee');
        if( !date ) throw CustomError.badRequest('Missing date');
        if( !hour ) throw CustomError.badRequest('Missing hour');
        if( !document && documentId ) throw CustomError.badRequest('Missing documentId or document');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');


        return new AttendanceEntity(id, employeeId || employee, date, hour, document || documentId, isActive);
    }
}
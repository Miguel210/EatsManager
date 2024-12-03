import { CustomError } from "../errors/custom.error";



export class EmployeeEntity {

    constructor(
        public id: string,
        public person: string,
        public personId: string,
        public hireDate: Date,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {
        const {id, person =' ', personId, hireDate, input, output, salary, isActive} = object;
        console.log(object);
        
        if( !id ) throw CustomError.badRequest('Missing id employee');

        if( !person  ) throw CustomError.badRequest('Missing person');
        if( !personId  ) throw CustomError.badRequest('Missing personId');
        if( !hireDate ) throw CustomError.badRequest('Missing  hireDate');
        if( !input ) throw CustomError.badRequest('Missing input');
        if( !output ) throw CustomError.badRequest('Missing output');
        if( !salary ) throw CustomError.badRequest('Missing salary');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');


        return new EmployeeEntity(id, person, personId, hireDate, input, output, salary, isActive);
    }
}
import { CustomError } from "../errors/custom.error";


export class EvaluationEntity {

    constructor(
        public id:          string,
        public employeeId:  string,
        public evaluatorId: string,
        public date:        Date,
        public punctuality: number,
        public attitude:    number,
        public quality:     number,
        public efficiency:  number,
        public initiative:  number,
        public hygiene:     number,
        public isActive:    boolean,

        public empoyee: {person: {fullname: string}},
        public evaluator: {person: {fullname: string}}

    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, employeeId, empoyee, evaluatorId, evaluator, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive} = object;
        
        console.log(object);
        
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !employeeId && !empoyee ) throw CustomError.badRequest('Missing employee');
        if( !evaluatorId && !evaluator ) throw CustomError.badRequest('Missing evaluatorId');
        if( date === undefined ) throw CustomError.badRequest('Missing date');
        if( punctuality === undefined ) throw CustomError.badRequest('Missing punctuality');
        if( attitude === undefined ) throw CustomError.badRequest('Missing attitude');
        if( quality === undefined ) throw CustomError.badRequest('Missing quality');
        if( efficiency === undefined ) throw CustomError.badRequest('Missing efficiency');
        if( initiative === undefined ) throw CustomError.badRequest('Missing initiative');
        if( hygiene === undefined ) throw CustomError.badRequest('Missing hygiene');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new EvaluationEntity(id, employeeId || empoyee, evaluatorId || evaluator, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive, empoyee,evaluator);
    }   
}
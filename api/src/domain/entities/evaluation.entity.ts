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
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, employeeId, empoyee, evaluatorId, evaluator, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive} = object;
        
        console.log(object);
        
        if( !id ) throw CustomError.badRequest('Missing id');
        if( !employeeId && !empoyee ) throw CustomError.badRequest('Missing employee');
        if( !evaluatorId && !evaluator ) throw CustomError.badRequest('Missing evaluatorId');
        if( date === undefined ) throw CustomError.badRequest('Missing date');
        if( !punctuality ) throw CustomError.badRequest('Missing punctuality');
        if( !attitude ) throw CustomError.badRequest('Missing attitude');
        if( !quality ) throw CustomError.badRequest('Missing quality');
        if( !efficiency ) throw CustomError.badRequest('Missing efficiency');
        if( !initiative ) throw CustomError.badRequest('Missing initiative');
        if( !hygiene ) throw CustomError.badRequest('Missing hygiene');
        if( !isActive ) throw CustomError.badRequest('Missing isActive');

        return new EvaluationEntity(id, employeeId || empoyee, evaluatorId || evaluator, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive);
    }   
}
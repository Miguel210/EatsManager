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

        const {id, employeeId, employee, evaluatorId, evaluators, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive} = object;

        if( !id ) throw CustomError.badRequest('Missing id');
        if( !employeeId && !employee ) throw CustomError.badRequest('Missing id');
        if( !evaluatorId && evaluators ) throw CustomError.badRequest('Missing id');
        if( date === undefined ) throw CustomError.badRequest('Missing id');
        if( !punctuality ) throw CustomError.badRequest('Missing id');
        if( !attitude ) throw CustomError.badRequest('Missing id');
        if( !quality ) throw CustomError.badRequest('Missing id');
        if( !efficiency ) throw CustomError.badRequest('Missing id');
        if( !initiative ) throw CustomError.badRequest('Missing id');
        if( !hygiene ) throw CustomError.badRequest('Missing id');
        if( !isActive ) throw CustomError.badRequest('Missing id');

        return new EvaluationEntity(id, employeeId || employee, evaluatorId || evaluators, date, punctuality,attitude,quality,efficiency, initiative, hygiene, isActive);
    }   
}
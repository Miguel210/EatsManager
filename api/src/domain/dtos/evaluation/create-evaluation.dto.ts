




export class CreateEvaluationDto {

    constructor(
        public employeeId: string,
        public evaluatorId: string,
        public punctuality: number,
        public attitude:    number,
        public quality:     number,
        public efficiency:  number,
        public initiative:  number,
        public hygiene:     number
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateEvaluationDto?] {

        const {employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene} = props;

        if( !employeeId ) return ['employeeid is requerid'];
        if( !evaluatorId ) return ['evaluatorid is requerid'];
        if( !punctuality ) return ['punctuality is requerid'];
        if( !attitude ) return ['attitude is requerid'];
        if( !quality ) return ['quality is requerid'];
        if( !efficiency ) return ['efficiency is requerid'];
        if( !initiative ) return ['initiative is requerid'];
        if( !hygiene ) return ['hygiene is requerid'];

        return [undefined, new CreateEvaluationDto(employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
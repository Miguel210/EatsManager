




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

        if( employeeId === undefined) return ['employeeid is requerid'];
        if( evaluatorId === undefined) return ['evaluatorid is requerid'];
        if( punctuality === undefined) return ['punctuality is requerid'];
        if( attitude === undefined) return ['attitude is requerid'];
        if( quality === undefined) return ['quality is requerid'];
        if( efficiency === undefined) return ['efficiency is requerid'];
        if( initiative === undefined) return ['initiative is requerid'];
        if( hygiene === undefined) return ['hygiene is requerid'];

        return [undefined, new CreateEvaluationDto(employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
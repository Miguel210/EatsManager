




export class UpdateEvaluationDto {

    constructor(
        public punctuality: number,
        public attitude:    number,
        public quality:     number,
        public efficiency:  number,
        public initiative:  number,
        public hygiene:     number
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateEvaluationDto?] {

        const {  punctuality, attitude, quality, efficiency, initiative, hygiene} = props;

        if( !punctuality ) return ['punctuality is requerid'];
        if( !attitude ) return ['attitude is requerid'];
        if( !quality ) return ['quality is requerid'];
        if( !efficiency ) return ['efficiency is requerid'];
        if( !initiative ) return ['initiative is requerid'];
        if( !hygiene ) return ['hygiene is requerid'];

        return [undefined, new UpdateEvaluationDto(punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
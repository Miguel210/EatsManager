




export class UpdateEvaluationDto {

    constructor(
        public id: string,
        public punctuality: number,
        public attitude:    number,
        public quality:     number,
        public efficiency:  number,
        public initiative:  number,
        public hygiene:     number
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateEvaluationDto?] {

        const { id, punctuality, attitude, quality, efficiency, initiative, hygiene} = props;

        if( !id ) return ['id is requerid'];
        if( !punctuality ) return ['punctuality is requerid'];
        if( !attitude ) return ['attitude is requerid'];
        if( !quality ) return ['quality is requerid'];
        if( !efficiency ) return ['efficiency is requerid'];
        if( !initiative ) return ['initiative is requerid'];
        if( !hygiene ) return ['hygiene is requerid'];

        return [undefined, new UpdateEvaluationDto(id, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
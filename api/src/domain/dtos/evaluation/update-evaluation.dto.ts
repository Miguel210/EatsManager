




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
        if( punctuality === undefined ) return ['punctuality is requerid'];
        if( attitude === undefined ) return ['attitude is requerid'];
        if( quality === undefined ) return ['quality is requerid'];
        if( efficiency === undefined ) return ['efficiency is requerid'];
        if( initiative === undefined ) return ['initiative is requerid'];
        if( hygiene === undefined) return ['hygiene is requerid'];

        return [undefined, new UpdateEvaluationDto(id, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}



export class CreateTableDto {

    constructor(
        public description: string,
        public status: string,
        public mainTable: string,
    ) {}

    static create(props: {[key: string]: any}) {

        const {description, status, mainTable} = props;
        
        if( !description ) return ['description is requerid'];
        if( !status ) return ['status is requerid'];

        return [undefined, new CreateTableDto(description, status, mainTable)];

    }
}
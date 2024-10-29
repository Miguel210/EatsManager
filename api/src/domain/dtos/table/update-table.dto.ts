


export class UpdateTableDto {

    constructor(
        public description: string,
        public status: string,
        public mainTable: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}) {

        const {description, status, mainTable, isActive} = props;
        
        if( !description ) return ['description is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid']
        
        return [undefined, new UpdateTableDto(description, status, mainTable, isActive)];

    }
}
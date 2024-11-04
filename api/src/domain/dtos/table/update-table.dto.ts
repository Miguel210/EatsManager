


export class UpdateTableDto {

    constructor(
        public id: string,
        public description: string,
        public status: string,
        public mainTable: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateTableDto?] {

        const {id, description, status, mainTable, isActive} = props;
        
        if( !id ) return ['id is requerid'];
        if( !description ) return ['description is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid']
        
        return [undefined, new UpdateTableDto(id, description, status, mainTable, isActive)];

    }
}
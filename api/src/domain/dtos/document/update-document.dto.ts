



export class UpdateDocumentDto {

    constructor(
        public id: string,
        public description: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateDocumentDto?] {

        const {id, description, isActive} = props;

        if( !id ) throw ['id is requerid'];
        if( !description ) throw ['Description is requerid'];
        if( isActive === undefined ) throw ['isActive is requerid'];

        return [undefined, new UpdateDocumentDto(id, description,isActive)]
    }
}




export class CreateDocumentDto {

    constructor(
        public description: string,
        public isActive: boolean,
        public folio: number
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateDocumentDto?] {

        const {description, isActive, folio = 1} = props;

        if( !description ) throw ['Description is requerid'];
        if( isActive === undefined ) throw ['isActive is requerid'];

        return [undefined, new CreateDocumentDto(description,isActive,folio)]
    }
}




export class CreateDocumentDto {

    constructor(
        public description: string,
        public isActive: boolean
    ) {}

    static create(props: {[key: string]: any}): [string?, CreateDocumentDto?] {

        const {description, isActive} = props;

        if( !description ) throw ['Description is requerid'];
        if( isActive === undefined ) throw ['isActive is requerid'];

        return [undefined, new CreateDocumentDto(description,isActive)]
    }
}
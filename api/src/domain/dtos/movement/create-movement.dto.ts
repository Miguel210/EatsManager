




export class CreateMovementDto {

    constructor(
        public readonly personId: string,
        public readonly documentId: string,
        public readonly elaborateid: string,
        public readonly amout: number,
        public readonly status: string,
        public readonly isActive: boolean,
        public readonly referenceId: string
    ){}

    static create(props: {[key: string]: any }): [string?, CreateMovementDto?] {

        const {personId, documentId, elaborateId, amount, status, isActive, referenceId, date} = props;

        if( !personId ) return ['personId requerid'];
        if( !documentId ) return ['personId requerid'];
        //if( !elaborateId ) return ['personId requerid'];
        if( !amount ) return ['personId requerid'];
        if( !status ) return ['personId requerid'];
        if( isActive === undefined ) return ['personId requerid'];
        //if( !referenceId ) return ['personId requerid'];

        return [undefined, new CreateMovementDto(personId, documentId, elaborateId, amount, status, isActive, referenceId)]
    }
}
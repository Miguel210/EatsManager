




export class UpdateMovementDto {

    constructor(
        public readonly id: string,
        public readonly personId: string,
        public readonly documentId: string,
        public readonly elaborateid: string,
        public readonly amout: number,
        public readonly status: string,
        public readonly isActive: boolean,
        public readonly referenceId: string
    ){}

    static create(props: {[key: string]: any }): [string?, UpdateMovementDto?] {

        const {id, personId, documentId, elaborateId, amount, status, isActive, referenceId} = props;

        if( !id ) throw ['id is requerid']
        if( !personId ) return ['personId is requerid'];
        if( !documentId ) return ['documentId is requerid'];
        //if( !elaborateId ) return ['personId requerid'];
        if( !amount ) return ['amount is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];
        //if( !referenceId ) return ['personId requerid'];

        return [undefined, new UpdateMovementDto(id, personId, documentId, elaborateId, amount, status, isActive, referenceId)]
    }
}
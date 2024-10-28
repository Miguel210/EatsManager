




export class UpdateMovementDto {

    constructor(
        public readonly id: string,
        public readonly documentId: string,
        public readonly amout: number,
        public readonly status: string,
        public readonly isActive: boolean,
    ){}

    static create(props: {[key: string]: any }): [string?, UpdateMovementDto?] {

        const {id, documentId, amount, status, isActive} = props;

        if( !id ) throw ['id is requerid']
        if( !documentId ) return ['documentId is requerid'];
        if( !amount ) return ['amount is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];

        return [undefined, new UpdateMovementDto(id, documentId, amount, status, isActive)]
    }
}
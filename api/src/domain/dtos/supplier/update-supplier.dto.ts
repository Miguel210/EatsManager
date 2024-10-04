

export class UpdateSupplierDto {

    private constructor(
        public readonly id: string,
        public readonly personId: string,
        public readonly IsActive: boolean
    ) {}


    static create(props: {[key: string]: any}):  [string?, UpdateSupplierDto?] {

        const {id, personId, isActive} = props;

        if( !id ) {
            return ['id is requerid'];
        }
        if( !personId ) {
            return ['PersonId no exist, is requerid']
        }
        if( isActive===false ) {
            return ['isActive must be validate']
        }


        return [undefined, new UpdateSupplierDto(id, personId, isActive)]
    }
}


export class UpdateSupplierDto {

    private constructor(
        public readonly id: string,
        public readonly personId: string,
        public readonly IsActive: boolean
    ) {}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if( this.personId ) returnObj.personId = this.personId;
        if( this.IsActive ) returnObj.isActive = this.IsActive;

        return returnObj;
    }

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
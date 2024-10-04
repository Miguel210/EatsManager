


export class CreateSupplierDto {

    private constructor(
        public readonly personId: string,
    ){}

    static create(props: {[key: string]: any }): [string?, CreateSupplierDto?] {
        const {personId} = props;

        if( !personId ) return ['PeronId is requerid', undefined];

        return [undefined, new CreateSupplierDto(personId)];
    }
}
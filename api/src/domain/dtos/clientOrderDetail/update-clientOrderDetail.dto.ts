


export class UpdateClientOrderDetailDto {

    constructor(
        public id: string,
        public clientOrderId: string,
        public garrisonId: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateClientOrderDetailDto?] {

        const {id,clientOrderId, garrisonId} = props;

        if( !id ) return ['di is requerid'];
        if( !clientOrderId ) return ['clientOrderId is requerid'];
        if( !garrisonId ) return ['garrisonId is requerid'];

        return [undefined, new UpdateClientOrderDetailDto(id,clientOrderId, garrisonId)];

    }
}
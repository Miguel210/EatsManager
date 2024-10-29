


export class CreateClientOrderDetailDto {

    constructor(
        public clientOrderId: string,
        public garrisonId: string,
    ) {}

    static create(props: {[key: string]: any}) {

        const {clientOrderId, garrisonId} = props;

        if( !clientOrderId ) return ['clientOrderId is requerid'];
        if( !garrisonId ) return ['garrisonId is requerid'];

        return [undefined, new CreateClientOrderDetailDto(clientOrderId, garrisonId)];

    }
}
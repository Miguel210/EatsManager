import { UpdateClientOrderDto } from "../clientOrder/update-clientOrder.dto";



export class UpdateTableDto {

    constructor(
        public id: string,
        public description: string,
        public status: string,
        public mainTable: string,
        public isActive: boolean,

        public clientOrder: UpdateClientOrderDto[],
        public elaborateId: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdateTableDto?] {

        const {id, description, status = 'ocupado', mainTable, isActive, clientOrder, elaborateId} = props;
        let clientOrderDto = undefined; 
        if( !id ) return ['id is requerid'];
        if( !description ) return ['description is requerid'];
        if( !status ) return ['status is requerid'];
        if( isActive === undefined ) return ['isActive is requerid']

        if( clientOrder )  {
            clientOrderDto = clientOrder.map( (dt: { [key: string]: any; }) => UpdateClientOrderDto.create({...dt, movement: dt.movement })[1]);

        }
        
        // console.log('bbbbbbbbbbbbbbbbbbb');
        // console.log(clientOrderDto);
        // console.log('bbbbbbbbbbbbbbbbbbb');
        

        return [undefined, new UpdateTableDto(id, description, status, mainTable, isActive, clientOrderDto!, elaborateId)];

    }
}


export class CreateEmployeeDto {

    constructor(
        public personId: string,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}): [string?, CreateEmployeeDto?] {

        const {personId, input, output, salary, isActive} = props;


        if( !personId ) return ['Requerid personId'];
        if( !input ) return ['Requerid input'];
        if( !output ) return ['Requerid output'];
        if( !salary ) return ['Requerid salary'];
        if( isActive === undefined ) return ['Requerid isActive'];

        return [undefined, new CreateEmployeeDto(personId, input, output, salary, isActive)]
    }
}
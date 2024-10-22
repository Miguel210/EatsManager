

export class CreateEmployeeDto {

    constructor(
        public personId: string,
        public hireDate: Date,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}): [string?, CreateEmployeeDto?] {

        const {personId, hireDate, input, output, salary, isActive} = props;


        if( !personId ) return ['Requerid personId'];
        if( !hireDate ) return ['Requerid hireDate'];
        if( !input ) return ['Requerid input'];
        if( !output ) return ['Requerid output'];
        if( !salary ) return ['Requerid salary'];
        if( isActive === undefined ) return ['Requerid isActive'];

        return [undefined, new CreateEmployeeDto(personId, hireDate, input, output, salary, isActive)]
    }
}
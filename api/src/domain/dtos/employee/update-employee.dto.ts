

export class UpdateEmployeeDto {

    constructor(
        public id: string,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}): [string?, UpdateEmployeeDto?] {

        const {id, input, output, salary, isActive} = props;

        if( !id ) return ['Requerid id'];
        if( !input ) return ['Requerid input'];
        if( !output ) return ['Requerid output'];
        if( !salary ) return ['Requerid salary'];
        if( isActive === undefined ) return ['Requerid isActive'];

        return [undefined, new UpdateEmployeeDto(id, input, output, salary, isActive)]
    }
}
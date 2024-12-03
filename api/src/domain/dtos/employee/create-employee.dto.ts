import { CreatePersonDto } from "../person/create-person.dto";


export class CreateEmployeeDto {

    constructor(
        public person: CreatePersonDto,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}): [string?, CreateEmployeeDto?] {

        const {genderId, profileId, typePersonId, fullname, username, password, input, output, salary, isActive} = props;
        console.log(props);
        
        const [error, person] = CreatePersonDto.create({genderId, profileId, typePersonId, fullname, username, password});
        if( error ) throw [error,undefined]
        

        if( !person ) return ['Requerid personId'];
        if( !input ) return ['Requerid input'];
        if( !output ) return ['Requerid output'];
        if( !salary ) return ['Requerid salary'];
        if( isActive === undefined ) return ['Requerid isActive'];

        return [undefined, new CreateEmployeeDto(person, input, output, salary, isActive)]
    }
}
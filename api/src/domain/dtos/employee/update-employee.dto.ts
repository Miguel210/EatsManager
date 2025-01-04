import { CreatePersonDto } from "../person/create-person.dto";
import { UpdatePersonDto } from "../person/update-person.dto";


export class UpdateEmployeeDto {

    constructor(
        public id: string,
        public input: Date,
        public output: Date,
        public salary: number,
        public isActive: boolean,
        public person: UpdatePersonDto
    ) {}

    static create( props: {[key: string]: any}): [string?, UpdateEmployeeDto?] {

        const {id, input, output, salary, isActive, genderId, profileId, typePersonId, fullname, username, password} = props;
        
        if( !id ) return ['Requerid id'];
        if( !input ) return ['Requerid input'];
        if( !output ) return ['Requerid output'];
        if( !salary ) return ['Requerid salary'];
        if( isActive === undefined ) return ['Requerid isActive'];

        const [error, person] = UpdatePersonDto.create({id: '',genderId, profileId, typePersonId, fullname, username, password});
        if( error ) throw [error,undefined]
        

        return [undefined, new UpdateEmployeeDto(id, input, output, salary, isActive, person!)]
    }
}
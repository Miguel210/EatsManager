import { CreatePersonDto } from "../person/create-person.dto";



export class CreateSupplierDto {

    private constructor(
        public readonly createPersonDto: CreatePersonDto,
    ){}

    static create(props: {[key: string]: any }): [string?, CreateSupplierDto?] {
        
        const {genderId, profileId, typePersonId, fullname, username, password} = props;

        const [error, person] = CreatePersonDto.create({genderId, profileId, typePersonId, fullname, username, password});
        if( error ) throw [error,undefined]
        
        
        return [undefined, new CreateSupplierDto(person!)];
    }
}
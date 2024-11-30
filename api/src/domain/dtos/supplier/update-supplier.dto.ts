import { UserEntity } from "../../entities/user.entity";
import { UpdatePersonDto } from "../person/update-person.dto";


export class UpdateSupplierDto {

    private constructor(
        public readonly id: string,
        public readonly personId: string,
        public readonly IsActive: boolean,
        public readonly person: UpdatePersonDto
    ) {}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if( this.personId ) returnObj.personId = this.personId;
        if( this.IsActive ) returnObj.isActive = this.IsActive;

        return returnObj;
    }

    static create(props: {[key: string]: any}):  [string?, UpdateSupplierDto?] {

        const {id, personId, isActive, fullname, username, password, genderId ,profileId, typePersonId} = props;
        console.log(isActive);
        
        if( !id ) {
            return ['id is requerid'];
        }
        if( !personId ) {
            return ['personId no exist, is requerid']
        }
        if( isActive === undefined ) {
            return ['isActive must be validate']
        }
        //todo this part is person
        const [error, updatePersonDto] = UpdatePersonDto.create({genderId ,profileId, typePersonId, fullname, username, password})
        if( error )return [error]


        return [undefined, new UpdateSupplierDto(id, personId, isActive, updatePersonDto!)]
    }
}
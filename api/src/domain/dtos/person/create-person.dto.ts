



export class CreatePersonDto {

    private constructor(
        //public readonly id: string,
        public readonly genderId: string,
        public readonly profileId: string,
        public readonly typePersonId: string,
        public readonly fullname: string,
        public readonly username: string,
        public readonly password: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, CreatePersonDto?] {

        const { genderId, profileId, typePersonId, username = '', password = ''} = props
        
        console.log('1');
        console.log(props);
        console.log('1');
        
            const {id, fullname} = props.person
            
        if( id )    return ['id exist', undefined]
        if( !genderId) return ['genderId is requerid', undefined]
        if( !profileId) return ['genderId is requerid', undefined]
        if( !typePersonId) return ['genderId is requerid', undefined]
        if( !fullname) return ['genderId is requerid', undefined]


        return [undefined, new CreatePersonDto(genderId, profileId, typePersonId, fullname, username, password)]
    }
}
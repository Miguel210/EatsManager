



export class UpdatePersonDto {

    private constructor(
        //public readonly id: string,
        public readonly genderId: string,
        public readonly profileId: string,
        public readonly typePersonId: string,
        public readonly fullname: string,
        public readonly username: string,
        public readonly password: string,
    ) {}

    static create(props: {[key: string]: any}): [string?, UpdatePersonDto?] {

        const { genderId, profileId, typePersonId, fullname, username, password} = props

        if( !genderId) return ['genderId is requerid']
        if( !profileId) return ['profileId is requerid']
        if( !typePersonId) return ['typePersonId is requerid']
        if( !fullname) return ['fullname is requerid']


        return [undefined, new UpdatePersonDto(genderId, profileId, typePersonId, fullname, username, password)]
    }
}
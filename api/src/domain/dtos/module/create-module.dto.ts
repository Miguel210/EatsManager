




export class ModulesDto {

    constructor(
        public id: string
    ){}

    static modules(object: {[key: string]: any}): [string?, ModulesDto?] {
        
        const {profileId} = object;
        
        
        if( !profileId ) return ['Missing Id Module ']
        

        return [ undefined, new ModulesDto(profileId)]
    }
}
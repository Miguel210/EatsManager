




export class ModulesDto {

    constructor(
        public id: string,
        public name: string,
        public identifier: number
    ){}

    static modules(object: {[key: string]: any}): [string?, ModulesDto?] {
        
        const {id, name, identifier} = object;
        
        
        if( !id ) return ['Missing Id Module ']

        if( !name ) return ['Missing name Module']
        if( !Number(identifier) ) ['Missing Identifier']
        

        return [ undefined, new ModulesDto(id, name, identifier)]
    }
}
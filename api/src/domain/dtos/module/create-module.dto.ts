




export class ModulesDto {

    constructor(
        public id: string
    ){}

    static modules(object: {[key: string]: any}): [string?, ModulesDto?] {

        const {id} = object;

        if( !id ) return ['Missing Id Module ']

        return [undefined, new ModulesDto(id)]
    }
}
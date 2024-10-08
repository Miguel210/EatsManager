


export class OperationDto {

    constructor(
        id: string,
        moduleId: string,
        name: string,
    ){}

    static operation(object: {[key: string]: any}): [string?, OperationDto?] {
        const {id, moduleId, name, isActive} = object;

        if( !id ) return ['Missing Id operation']

        if( !moduleId ) return ['Missing Id moduleId']
        if( !name ) return ['Missing Id moduleId']
        if( isActive===false ) return ['Isnt active']


        return [undefined, new OperationDto(id, moduleId, name)]
    }
}
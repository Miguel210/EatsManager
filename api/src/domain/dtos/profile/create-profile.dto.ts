


export class ProfileDto {

    constructor(
        public id: string,
        public name: string,
        
    ){}

    static profile(object: {[key: string]: any}):  [string?, ProfileDto?] {

        const {id, name, isActive} = object;

        if ( !id ) return ['Missing Id Profile']

        if( !name ) return ['Missing name profile']
        if( isActive===false ) return [' profile no active or no exist'] 

         return [undefined, new ProfileDto(id, name)]
    }
}
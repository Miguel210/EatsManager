import { CustomError } from "../errors/custom.error";



export class  UserEntity {

    constructor(
        public id: string,
        public fullname: string,
        public username: string,
        public password: string,
        public isActive: boolean,
        public profile: string,

        public typeperson: string,
    ){}


    static fromObject(object: {[key:string]:any}){
        const { id , fullname, username, password = '3333',profile, typeperson, isActive} = object;

        // , profile, typeperson
        if( !id ){
                throw CustomError.badRequest('Missing id');
            }

            if( !fullname) throw CustomError.badRequest('Missing fullname');
            if( !username) throw CustomError.badRequest('Missing username!!!');
            if( !password) throw CustomError.badRequest('Missing password');
            if( !profile === undefined) throw CustomError.badRequest('Missing profile');
            if( !typeperson) throw CustomError.badRequest('Missing type Person');
            if( isActive == false) throw CustomError.badRequest('Missing Exist');

        return new UserEntity( id, fullname, username, password ,isActive,profile, typeperson);
        // , profile,typeperson
    }
}
import { CustomError } from "../errors/custom.error";



export class  UserEntity {

    constructor(
        public id: string,
        public fullname: string,
        public username: string,
        public password: string,
        // public profile: string,
        // public typeperson: string,
    ){}


    static fromObject(object: {[key:string]:any}){
        const { id , _id, fullname, username, password} = object;
        // , profile, typeperson
        if( !_id && !id){
            throw CustomError.badRequest('Missing id');
        }

        if( !fullname) throw CustomError.badRequest('Missing name');
        if( !username) throw CustomError.badRequest('Missing username');
        if( !password) throw CustomError.badRequest('Missing password');
        // if( !profile === undefined) throw CustomError.badRequest('Missing profile');
        // if( !typeperson) throw CustomError.badRequest('Missing type Person');

        return new UserEntity(_id || id, fullname, username, password);
        // , profile,typeperson
    }
}
import bcrypt, { compare, compareSync, hashSync } from 'bcryptjs';


export const bcryptAdapter = {

    hash: (password: string) => {
        const salt = bcrypt.genSaltSync();
        return hashSync(password,salt)
    },
    compare: (password: string, hashed: string) => {
        return compareSync(password, hashed)
    }
}
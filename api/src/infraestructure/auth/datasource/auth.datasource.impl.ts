import { AuthDatasource } from "../../../domain/datasource/auth/auth.datasource";
import { UserEntity } from "../../../domain/entities/user.entity";
import { prisma } from "../../../data";


export class AuthDatasourceImpl implements AuthDatasource {

    async findByUsername(username: string): Promise<UserEntity> {
        console.log(
            username
        );
        
        const user = await prisma.person.findFirst({
            where: {
                username: username
            },
            include: {
                profile: {
                    select: {
                        id: true
                    }
                },
                typeperson: {
                    select: {
                        description: true
                    }
                }
            }
        })
        
        if( !user ) throw `Todo with Username ${username} not found`;
        return UserEntity.fromObject(user)
    }

    async findById(id: string): Promise<UserEntity> {

        const user = await prisma.person.findFirst({
            where: {
                id: id
            },
            include: {
                profile: {
                    select: {
                        id: true
                    }
                },
                typeperson: {
                    select: {
                        description: true
                    }
                }
            }
        })
        
        if( !user ) throw `Todo with id ${user} not found`;

        return UserEntity.fromObject(user);
    }

}
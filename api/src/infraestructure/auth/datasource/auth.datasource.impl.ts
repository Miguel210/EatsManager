import { AuthDatasource } from "../../../domain/datasource/auth/auth.datasource";
import { UserEntity } from "../../../domain/entities/user.entity";
import { prisma } from "../../../data";


export class AuthDatasourceImpl implements AuthDatasource {

    async findById(username: string): Promise<UserEntity> {
        const user = await prisma.person.findFirst({
            where: {
                username: username
            },
            include: {
                profile: {
                    select: {
                        name: true
                    }
                },
                typeperson: {
                    select: {
                        description: true
                    }
                }
            }
        })
        if( !user ) throw `Todo with id ${username} not found`;
        return UserEntity.fromObject(user)
    }

}
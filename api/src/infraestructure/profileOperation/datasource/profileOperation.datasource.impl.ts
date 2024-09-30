import { prisma } from "../../../data";
import { ProfileOperationDatasource } from "../../../domain/datasource/profileOperation/profileOperation.datasource";
import { ProfileOperationEntity } from "../../../domain/entities/profileOperation.entity";




export class ProfileOperationDatasourceImpl implements ProfileOperationDatasource {
    
    
    async find(moduleId: string, profileId: string): Promise<ProfileOperationEntity[]> {

        const profileoperation = await prisma.profileOperation.findMany({
            where: {
                profileId: profileId,
                operation: {
                    module: {
                        name: 'Proveedor'
                    }
                }
            },
            include: {
                operation: {
                    select: {
                        name: true,
                        module: true
                    },
                    
                    
                }
            }

        })

        if( !profileoperation ) throw `Todo with id ${moduleId} not found`;
        //console.log(JSON.stringify(profileoperation));
        //console.log(profileoperation);
        
        return profileoperation.map(profileoperation => ProfileOperationEntity.fromObject(profileoperation))
        //return ProfileOperationEntity.fromObject(profileoperation)
    
    }

}
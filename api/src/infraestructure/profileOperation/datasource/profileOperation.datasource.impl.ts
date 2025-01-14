import { prisma } from "../../../data";
import { ProfileOperationDatasource } from "../../../domain/datasource/profileOperation/profileOperation.datasource";
import { ProfileOperationEntity } from "../../../domain/entities/profileOperation.entity";




export class ProfileOperationDatasourceImpl implements ProfileOperationDatasource {
    
    
    async find(moduleName: string, profileId: string): Promise<ProfileOperationEntity[]> {
        console.log(moduleName);
        console.log(profileId);
        
        
        const profileoperation = await prisma.profileOperation.findMany({
            where: {
                profileId: profileId,
                operation: {
                    module: {
                        name: moduleName
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

        if( !profileoperation ) throw `Todo with id ${moduleName} not found`;
        //console.log(JSON.stringify(profileoperation));
        //console.log(profileoperation);
        
        // console.log("id");
        // console.log(profileoperation);
        // console.log("id");

        return profileoperation.map(profileoperation => ProfileOperationEntity.fromObject(profileoperation))
        //return ProfileOperationEntity.fromObject(profileoperation)
    
    }

}
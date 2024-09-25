import { ModuleDatasource } from '../../../domain/datasource/module/module.datasource';
import { ModuleEntity } from '../../../domain/entities/module.enity';
import { prisma } from "../../../data";




export class ModuleDatasourceImpl implements ModuleDatasource {
    async findById(id: string): Promise<ModuleEntity> {
        const ids = id
        
        const module = await prisma.module.findMany({
            
            include: {
                operation: {
                    where: {
                        profiles: {
                            some: {
                                profileId: ids,
                            },
                            
                        },
                        
                    }
                }
            }
            



        })
        console.log(module);
        
        
        if( !module ) throw `Todo with id ${id} not found`;
        return ModuleEntity.fromObject(module)
    }

}

/*
select md.id, md."name"  from module as md
JOIN operation as op on op."moduleId"=md.id 
JOIN "profileOperation" as po on po."operationId"=op."id" 
JOIN profile as pr on pr.id=po."profileId" 
JOIN person as per on per."profileId"=pr.id 
where per.id='1' GROUP by md.id
*/
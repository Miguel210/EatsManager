import { ModuleDatasource } from '../../../domain/datasource/module/module.datasource';
import { ModuleEntity } from '../../../domain/entities/module.enity';
import { prisma } from "../../../data";
import { seedData } from '../../../data/seed/data';




export class ModuleDatasourceImpl implements ModuleDatasource {
    async findById(id: string): Promise<ModuleEntity[]> {
        const ids = id

        const module = await prisma.module.findMany({
            // include: {
            //     operations: {
            //         where: {
            //             profiles: {
            //                 some: {
            //                     profileId: ids,
            //                 },
            //             },
            //         },
            //     },
            // }
            where: {
                operations: {
                    some: {
                        profiles: {
                            some: {
                                profileId: ids
                            }
                        }
                    }
                }
            },
            select: {
                id: true,
                name: true
            }


        })
        if( !module ) throw `Todo with id ${id} not found`;
        
        return module.map(module => ModuleEntity.fromObject(module))
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
import { ModuleDatasource } from '../../../domain/datasource/module/module.datasource';
import { ModuleEntity } from '../../../domain/entities/module.enity';
import { prisma } from "../../../data";




export class ModuleDatasourceImpl implements ModuleDatasource {
    async findById(id: string): Promise<ModuleEntity> {
        const operations = await prisma.profileOperation.findMany({

            where: {
                profileId: '1'
            },
            include: {
                operation: {
                    select: {
                        name: true,
                    },
                }
            }

        })

        // console.table(operations);
        const module = await prisma.$queryRaw`select md.id, md.name from module as md JOIN operation as op on op."moduleId"=md.id  JOIN "profileOperation" as po on po."operationId"=op."id"  JOIN profile as pr on pr.id=po."profileId" JOIN person as per on per."profileId"=pr.id  where  pr.id=${id.toString()} `
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
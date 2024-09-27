import { prisma } from "../../../data";
import { OperationDatasource } from "../../../domain/datasource/operation/operation.datasource";
import { OperationEntity } from "../../../domain/entities/operation.entity";



export class OperationDatasourceImpl implements OperationDatasource {
    async getAllByProfile(id: string): Promise<OperationEntity[]> {

        const operations = await prisma.operation.findMany({
            include: {
                profiles: {
                    where: {
                        profileId: id
                    }
                },
                module:{
                    include: {
                        operations:{
                            
                        }
                    }      
                }
            },
        })
        console.log(operations);
        
        if( !operations ) throw `Operations with profileId ${id} not found`;
        return operations.map(operation => OperationEntity.fromObject(operations))
    }

}
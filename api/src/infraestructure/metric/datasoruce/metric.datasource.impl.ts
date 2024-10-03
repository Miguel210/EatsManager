import { prisma } from "../../../data";
import { MetricDatasource } from "../../../domain/datasource/metric/metric.datasource";
import { MetricEntity } from "../../../domain/entities/metric.enity";


export class MetricDatasourceImpl implements MetricDatasource {

    async find(id: string): Promise<MetricEntity> {
       // console.log(id.toString());
        
        const metric = await prisma.metric.findFirst({
            where: {
                operationId: id
            }
        })
        
        //console.log(metric);
        if( !metric ) throw `Todo with id ${id} not found`;
        
        return MetricEntity.fromObject(metric);
    }

}
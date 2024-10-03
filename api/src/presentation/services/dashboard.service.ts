import { prisma } from "../../data";
import { CustomError } from "../../domain";
import { GetMetric } from "../../domain/use-cases/metric/get-metric";
import { MetricRepositoryImpl } from "../../infraestructure/metric/repositories/metric.repository.impl";



export class DashboardService {

    constructor(
        readonly metricRepository: MetricRepositoryImpl
    ){}

    public async charge(data: string[]){
        
        console.log(data);
        
        
        let info: any = {};
        for (let index = 0; index < data.length; index++) {
            
            
            let ops = await new GetMetric(this.metricRepository).execute(data[index])
            .then(user => user)
            .catch(error => console.log(error))
            
            if( !ops ) {
                throw CustomError.badRequest('Metric no exist')
            } else {
                info[ops.name] =  await prisma.$queryRawUnsafe(ops.sentence) 
                //console.log( await prisma.$queryRawUnsafe(ops.sentence) );
            }
            //console.log(ops.sentence);
        }

        console.log(info);
        

        return {
            data: info
        }

    }
}
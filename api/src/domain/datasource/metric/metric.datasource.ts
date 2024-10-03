import { MetricEntity } from "../../entities/metric.enity";



export abstract class MetricDatasource {

    abstract find(id: string): Promise<MetricEntity>
    
}
import { MetricEntity } from "../../entities/metric.enity";



export abstract class MetricRepository {

    abstract find(id: string): Promise<MetricEntity>
}
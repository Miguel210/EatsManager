import { MetricEntity } from "../../entities/metric.enity";
import { MetricRepository } from "../../repositories/metric/metric.repository";




export interface GetMetricUseCase {
    execute(id: string): Promise<MetricEntity>
}


export class GetMetric implements GetMetricUseCase {

    constructor(
        private readonly repository: MetricRepository
    ) {}
    execute(id: string): Promise<MetricEntity> {
        return this.repository.find(id);
    }

}
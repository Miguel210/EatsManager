import { MetricDatasource } from "../../../domain/datasource/metric/metric.datasource";
import { MetricEntity } from "../../../domain/entities/metric.enity";
import { MetricRepository } from "../../../domain/repositories/metric/metric.repository";



export class MetricRepositoryImpl implements MetricRepository {

    constructor(
        private readonly datasource: MetricDatasource
    ) {}

    find(id: string): Promise<MetricEntity> {
        return this.datasource.find(id)
    }

}
import { ProfileOperationDatasource } from "../../../domain/datasource/profileOperation/profileOperation.datasource";
import { ProfileOperationEntity } from "../../../domain/entities/profileOperation.entity";
import { ProfileOperationRepository } from "../../../domain/repositories/profileOperation/profileOperation.repository";


export class ProfileOperationImpl implements ProfileOperationRepository {

    constructor(
        private readonly datasource: ProfileOperationDatasource
    ){}

    find(moduleName: string, profileId: string): Promise<ProfileOperationEntity[]> {
        return this.datasource.find(moduleName, profileId)
    }

}
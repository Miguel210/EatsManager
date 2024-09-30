import { ProfileOperationEntity } from "../../entities/profileOperation.entity";



export abstract class ProfileOperationDatasource {

    abstract find(moduleId: string, profileId: string): Promise<ProfileOperationEntity[]>;
}
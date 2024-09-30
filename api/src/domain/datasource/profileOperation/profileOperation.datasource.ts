import { ProfileOperationEntity } from "../../entities/profileOperation.entity";



export abstract class ProfileOperationDatasource {

    abstract find(moduleName: string, profileId: string): Promise<ProfileOperationEntity[]>;
}
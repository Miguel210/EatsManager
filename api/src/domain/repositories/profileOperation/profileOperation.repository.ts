import { ProfileOperationEntity } from "../../entities/profileOperation.entity";



export abstract class ProfileOperationRepository {

    abstract find(moduleName: string, profileId: string): Promise<ProfileOperationEntity[]>;

}
import { ProfileOperationEntity } from "../../entities/profileOperation.entity";



export abstract class ProfileOperationRepository {

    abstract find(moduleId: string, profileId: string): Promise<ProfileOperationEntity[]>;

}
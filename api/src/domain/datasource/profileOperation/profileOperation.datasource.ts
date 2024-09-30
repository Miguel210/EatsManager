


export abstract class ProfileOperationDatasource {

    abstract find(moduleId: string, profileId: string): Promise<''>;
}
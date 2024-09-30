import { CustomError } from "../errors/custom.error";




export class ProfileOperationEntity {

    constructor(
        public id: String,
        public profileId: String,
        public operationId: String,
        public operation: string
    ){}

    static fromObject(object: {[key: string]: any}) {

        const {id, profileId, operationId, operation} = object;

        if( !id ) {
            throw CustomError.badRequest('Missing id ProfileOperation');
        }
        if( !profileId ) {
            throw CustomError.badRequest('Missing id profileId');
        }
        if( !operationId ) {
            throw CustomError.badRequest('Missing id operationId');
        }

        return new ProfileOperationEntity(id, profileId, operationId,operation)
    }
}
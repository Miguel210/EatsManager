"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovementDto = void 0;
const create_movementDetail_1 = require("../movementDetail/create-movementDetail");
class CreateMovementDto {
    constructor(personId, documentId, elaborateId, amount, status, isActive, referenceId, MovementDetailDto, SupplierOrderDto, ClientOrderDto, extra, isCreate) {
        this.personId = personId;
        this.documentId = documentId;
        this.elaborateId = elaborateId;
        this.amount = amount;
        this.status = status;
        this.isActive = isActive;
        this.referenceId = referenceId;
        this.MovementDetailDto = MovementDetailDto;
        this.SupplierOrderDto = SupplierOrderDto;
        this.ClientOrderDto = ClientOrderDto;
        this.extra = extra;
        this.isCreate = isCreate;
    }
    static create(props) {
        let { personId, documentId, elaborateId, amount, status, isActive = true, referenceId, MovementDetailDto, movementDetail, SupplierOrderDto, extra, ClientOrderDto, isCreate = false } = props;
        if (!personId)
            return ['personId requerid'];
        if (!documentId)
            return ['documentId requerid'];
        //if( !elaborateId ) return ['personId requerid'];
        if (!amount)
            return ['amount requerid'];
        if (!status)
            return ['status requerid'];
        if (isActive === undefined)
            return ['isActive requerid'];
        //if( !referenceId ) return ['personId requerid'];
        MovementDetailDto = movementDetail.map((movementDetail) => create_movementDetail_1.CreateMovementDetailDto.create(movementDetail)[1]);
        // console.log('movementDetail');
        // console.log(movementDetail);
        // console.log('MovementDetailDto');
        // if(MovementDetailDto === undefined){ 
        //     MovementDetailDto = movementDetailDto;
        // }
        return [undefined, new CreateMovementDto(personId, documentId, elaborateId, amount, status, isActive, referenceId, MovementDetailDto, SupplierOrderDto, ClientOrderDto, extra, isCreate)];
    }
}
exports.CreateMovementDto = CreateMovementDto;

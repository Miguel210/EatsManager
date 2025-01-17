"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovementDto = void 0;
class UpdateMovementDto {
    constructor(id, documentId, amout, status, isActive, movementDetailDto, supplierOrders) {
        this.id = id;
        this.documentId = documentId;
        this.amout = amout;
        this.status = status;
        this.isActive = isActive;
        this.movementDetailDto = movementDetailDto;
        this.supplierOrders = supplierOrders;
    }
    static create(props) {
        const { id, documentId, amount, status, isActive, movementDetail, supplierOrders } = props;
        if (!id)
            throw ['id is requerid'];
        if (!documentId)
            return ['documentId is requerid'];
        if (!amount)
            return ['amount is requerid'];
        if (!status)
            return ['status is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        return [undefined, new UpdateMovementDto(id, documentId, amount, status, isActive, movementDetail, supplierOrders)];
    }
}
exports.UpdateMovementDto = UpdateMovementDto;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplierOrderDto = void 0;
class UpdateSupplierOrderDto {
    constructor(id, paymentDate, status, isActive) {
        this.id = id;
        this.paymentDate = paymentDate;
        this.status = status;
        this.isActive = isActive;
    }
    static create(props) {
        const { id, paymentDate, status, isActive } = props;
        if (!id)
            return ['id is requerid'];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!status)
            return ['status is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        return [undefined, new UpdateSupplierOrderDto(id, paymentDate, status, isActive)];
    }
}
exports.UpdateSupplierOrderDto = UpdateSupplierOrderDto;

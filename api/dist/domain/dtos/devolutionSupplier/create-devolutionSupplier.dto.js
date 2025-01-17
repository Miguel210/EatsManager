"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDevolutionSupplierDto = void 0;
class CreateDevolutionSupplierDto {
    constructor(movementId, inoiceFolio, paymentDate, status) {
        this.movementId = movementId;
        this.inoiceFolio = inoiceFolio;
        this.paymentDate = paymentDate;
        this.status = status;
    }
    static create(props) {
        const { movementId, inoiceFolio, paymentDate, status } = props;
        if (!movementId)
            return ['id is requerid'];
        if (!inoiceFolio)
            return ['inoiceFolio is requerid'];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!status)
            return ['status is requerid'];
        return [undefined, new CreateDevolutionSupplierDto(movementId, inoiceFolio, paymentDate, status)];
    }
}
exports.CreateDevolutionSupplierDto = CreateDevolutionSupplierDto;

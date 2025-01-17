"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplierOrderDto = void 0;
class CreateSupplierOrderDto {
    constructor(movementId, invoiceFolio, paymentDate, status) {
        this.movementId = movementId;
        this.invoiceFolio = invoiceFolio;
        this.paymentDate = paymentDate;
        this.status = status;
    }
    static create(props) {
        const { movementId, invoiceFolio, paymentDate, status } = props;
        // if( !movementId ) return ['id is requerid'];
        if (!invoiceFolio)
            return ['invoiceFolio is requerid'];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!status)
            return ['status is requerid'];
        return [undefined, new CreateSupplierOrderDto(movementId, invoiceFolio, paymentDate, status)];
    }
}
exports.CreateSupplierOrderDto = CreateSupplierOrderDto;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientOrderDto = void 0;
class CreateClientOrderDto {
    constructor(id, movementId, inoiceFolio, tableId, paymentDate, status, movement) {
        this.id = id;
        this.movementId = movementId;
        this.inoiceFolio = inoiceFolio;
        this.tableId = tableId;
        this.paymentDate = paymentDate;
        this.status = status;
        this.movement = movement;
    }
    static create(props) {
        const { id = 'NOId', movementId, inoiceFolio, tableId, paymentDate, status, movement } = props;
        if (!movementId)
            return ['id is requerid'];
        if (!inoiceFolio)
            return ['inoiceFolio is requerid'];
        if (!tableId)
            return ['tableId is requerid'];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!status)
            return ['status is requerid'];
        return [undefined, new CreateClientOrderDto(id, movementId, inoiceFolio, tableId, paymentDate, status, movement)];
    }
}
exports.CreateClientOrderDto = CreateClientOrderDto;

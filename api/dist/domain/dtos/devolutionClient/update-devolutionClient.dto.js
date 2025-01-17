"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDevolutionClientDto = void 0;
class UpdateDevolutionClientDto {
    constructor(id, paymentDate, status, isActive) {
        this.id = id;
        this.paymentDate = paymentDate;
        this.status = status;
        this.isActive = isActive;
    }
    static create(props) {
        const { paymentDate, status, isActive, id } = props;
        if (!id)
            return ['id is requerid'];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!status)
            return ['status is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        return [undefined, new UpdateDevolutionClientDto(id, paymentDate, status, isActive)];
    }
}
exports.UpdateDevolutionClientDto = UpdateDevolutionClientDto;

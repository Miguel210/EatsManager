"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientOrderDetailDto = void 0;
class UpdateClientOrderDetailDto {
    constructor(id, clientOrderId, garrisonId) {
        this.id = id;
        this.clientOrderId = clientOrderId;
        this.garrisonId = garrisonId;
    }
    static create(props) {
        const { id, clientOrderId, garrisonId } = props;
        if (!id)
            return ['di is requerid'];
        if (!clientOrderId)
            return ['clientOrderId is requerid'];
        if (!garrisonId)
            return ['garrisonId is requerid'];
        return [undefined, new UpdateClientOrderDetailDto(id, clientOrderId, garrisonId)];
    }
}
exports.UpdateClientOrderDetailDto = UpdateClientOrderDetailDto;

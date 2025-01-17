"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientOrderDetailDto = void 0;
class CreateClientOrderDetailDto {
    constructor(clientOrderId, garrisonId) {
        this.clientOrderId = clientOrderId;
        this.garrisonId = garrisonId;
    }
    static create(props) {
        const { clientOrderId, garrisonId } = props;
        if (!clientOrderId)
            return ['clientOrderId is requerid'];
        if (!garrisonId)
            return ['garrisonId is requerid'];
        return [undefined, new CreateClientOrderDetailDto(clientOrderId, garrisonId)];
    }
}
exports.CreateClientOrderDetailDto = CreateClientOrderDetailDto;

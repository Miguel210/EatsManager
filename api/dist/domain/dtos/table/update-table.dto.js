"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableDto = void 0;
const update_clientOrder_dto_1 = require("../clientOrder/update-clientOrder.dto");
class UpdateTableDto {
    constructor(id, description, status, mainTable, isActive, clientOrder, elaborateId) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.mainTable = mainTable;
        this.isActive = isActive;
        this.clientOrder = clientOrder;
        this.elaborateId = elaborateId;
    }
    static create(props) {
        const { id, description, status = 'ocupado', mainTable, isActive, clientOrder, elaborateId } = props;
        let clientOrderDto = undefined;
        if (!id)
            return ['id is requerid'];
        if (!description)
            return ['description is requerid'];
        if (!status)
            return ['status is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        if (clientOrder) {
            clientOrderDto = clientOrder.map((dt) => update_clientOrder_dto_1.UpdateClientOrderDto.create(Object.assign(Object.assign({}, dt), { movement: dt.movement }))[1]);
        }
        // console.log('bbbbbbbbbbbbbbbbbbb');
        // console.log(clientOrderDto);
        // console.log('bbbbbbbbbbbbbbbbbbb');
        return [undefined, new UpdateTableDto(id, description, status, mainTable, isActive, clientOrderDto, elaborateId)];
    }
}
exports.UpdateTableDto = UpdateTableDto;

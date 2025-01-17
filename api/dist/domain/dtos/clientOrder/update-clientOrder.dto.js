"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientOrderDto = void 0;
const create_movement_dto_1 = require("../movement/create-movement.dto");
class UpdateClientOrderDto {
    constructor(id, paymentDate, tableId, status, isActive, CreateMovementDto) {
        this.id = id;
        this.paymentDate = paymentDate;
        this.tableId = tableId;
        this.status = status;
        this.isActive = isActive;
        this.CreateMovementDto = CreateMovementDto;
    }
    static create(props) {
        let { id, paymentDate, tableId, status, isActive = true, movement } = props;
        // if( !id ) return ['id si requerid', undefined];
        if (!paymentDate)
            return ['paymentDate is requerid'];
        if (!tableId)
            return ['tableId is requerid'];
        if (!status)
            return ['status is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        const [error, CreateMovementDetailDto] = create_movement_dto_1.CreateMovementDto.create(Object.assign(Object.assign({}, movement), { personId: movement.personId, extra: 'clientOrder', ClientOrderDto: { id, paymentDate, tableId, status, isActive } }));
        // if(error) return [`Este es un error mvoement ${error}`];
        console.log('props');
        movement = CreateMovementDetailDto;
        console.log(error);
        console.log('props');
        return [undefined, new UpdateClientOrderDto(id, paymentDate, tableId, status, isActive, CreateMovementDetailDto)];
    }
}
exports.UpdateClientOrderDto = UpdateClientOrderDto;

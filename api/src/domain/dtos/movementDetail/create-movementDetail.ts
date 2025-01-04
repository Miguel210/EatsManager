

export class CreateMovementDetailDto {

    constructor(
        public readonly movementId: string,
        public readonly quantity: number,
        public readonly productId: string,
        public readonly priceUnit: number,
        public readonly subTotal: number,
        public readonly tax: number,
        public readonly total: number,
        public readonly costUnit: number,
        public readonly promotionId: string,

        public readonly product: { id: string, description: string },
        public readonly isCreatemov: boolean
    ) { }

    static create(props: { [key: string]: any }): [string?, CreateMovementDetailDto?] {
        const { movementId, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, isCreatemov = false} = props; 

        if (quantity === undefined) return ['quantity is required', undefined]; 
        if (!productId && !product) return ['productId is required', undefined]; 
        if (priceUnit === undefined) return ['priceUnit is required', undefined]; 
        if (subTotal === undefined) return ['subtotal is required', undefined]; 
        if (tax === undefined) return ['tax is required', undefined]; 
        if (total === undefined) return ['total is required', undefined]; 
        if (costUnit === undefined) return ['costUnit is required', undefined]; 
        
        return [undefined, new CreateMovementDetailDto(movementId, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, product, isCreatemov)];
    }
}
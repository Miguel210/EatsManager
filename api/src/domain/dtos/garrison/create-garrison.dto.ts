


export class CreateGarrisonDto {

    private constructor(
        public readonly dishId: string,
        public readonly garrisonId: string,
        public readonly quantity: number,
        public readonly identifier: number,
        public readonly isActive: boolean
    ) {}

    static create( props: {[key: string]:any}): [string?, CreateGarrisonDto?] {

        const {dishId, garrisonId, quantity, identifier, isActive} = props;

        if( !dishId ) return ['DishId is requerid'];
        if( !garrisonId ) return ['garrisionId is requerid'];
        if( !quantity ) return ['quantity is requerid'];
        if( !identifier ) return ['identidier is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new CreateGarrisonDto(dishId, garrisonId, quantity, identifier, isActive)]

    }

}
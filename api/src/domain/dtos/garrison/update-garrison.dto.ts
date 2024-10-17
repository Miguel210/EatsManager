


export class UpdateGarrisonDto {

    private constructor(
        public readonly id: string,
        public readonly dishId: string,
        public readonly garrisonId: string,
        public readonly quantity: number,
        public readonly identidier: number,
        public readonly isActive: boolean
    ) {}

    static create( props: {[key: string]:any}): [string?, UpdateGarrisonDto?] {

        const {id, dishId, garrisionId, quantity, identidier, isActive} = props;

        if( !id ) return ['id is requerid'];
        if( !dishId ) return ['DishId is requerid'];
        if( !garrisionId ) return ['garrisionId is requerid'];
        if( !quantity ) return ['quantity is requerid'];
        if( !identidier ) return ['identidier is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];


        return [undefined, new UpdateGarrisonDto(id, dishId, garrisionId, quantity, identidier, isActive)]

    }

}
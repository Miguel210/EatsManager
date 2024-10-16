


export class UpdateCategoryDto {

    private constructor(
        public readonly id: string,
        public readonly categoryName: string,
        public readonly isActive: boolean
    ) {}

    get values(){
        const returnObj: {[key: string]: any} = {};

        if( this.id ) returnObj.id = this.id
        if( this.isActive ) returnObj.isActive = this.isActive
        if( this.categoryName ) returnObj.categoryName = this.categoryName

        return returnObj
    }

    static create(props: {[key: string]: any}): [string?, UpdateCategoryDto?] {

        const {id, categoryName, isActive} = props;

        if( !id ) {
            return ['id is requerid'];
        }

        if( !categoryName ) {
            return ['CategoryName is requerid']
        }

        if( isActive === undefined ) {
            return ['isActive is requerid']
        }
        return [undefined, new UpdateCategoryDto(id, categoryName, isActive)];
    }
}
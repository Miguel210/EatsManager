

export class UpdateproductTypeDto {

    private constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly isActive: boolean,
        public readonly useStock: boolean
    ) {}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if( this.description ) returnObj.description = this.description;
        if( this.isActive ) returnObj.isActive = this.isActive;
        if( this.useStock ) returnObj.useStock = this.useStock

        return returnObj;
    }

    static create(props: {[key: string]: any}): [string?, UpdateproductTypeDto?] {

        const {id, description, isActive, useStock} = props;

        if( !id ) {
            return ['id is requerid']
        }

        if( !description ) return ['description is requerid'];
        if( isActive === undefined ) return ['isActive is requerid'];
        if( useStock === undefined ) return ['useStock is requerid']

        return [undefined, new UpdateproductTypeDto(id, description, isActive, useStock)];
    }
}
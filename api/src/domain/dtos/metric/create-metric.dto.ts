




export class MetricDto {
    constructor(

        public operationId: string,
    ) {}

    static metric(object: {[key: string]: any}): [string?, MetricDto?] {
        console.log('ds');

        console.log(object);
        console.log('ds');
        
        const {operationId} = object;

        if( !operationId ) return ['Missing name MetricDto']

        return [undefined, new MetricDto(operationId)]
    }
}
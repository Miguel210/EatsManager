


export class CreateAttendanceDto {

    constructor(
        public employeeId: string,
        public date: Date,
        public hour: Date,
        public documentId: string,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}): [string?, CreateAttendanceDto?] {

        const {employeeId, date, hour, documentId} = props;
        
        if( !employeeId ) return ['Requerid employeeId'];
        if( date === undefined ) return ['Requerid Date'];
        if( hour === undefined ) return ['Requerid hour'];
        if( !documentId ) return ['Requerid documentId'];
        const isActive: boolean = true;
        return [undefined, new CreateAttendanceDto(employeeId, date, hour, documentId, isActive)];
    }
}
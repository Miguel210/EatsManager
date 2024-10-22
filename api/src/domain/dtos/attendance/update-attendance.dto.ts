



export class UpdateAttendanceDto {

    constructor(
        public id: string,
        public employeeId: string,
        public date: Date,
        public hour: Date,
        public documentId: string,
        public isActive: boolean
    ) {}

    static create( props: {[key: string]: any}) {

        const {id, employeeId, date, hour, documentId, isActive} = props;
        
        if( !id ) return ['Requerid id'];
        if( !employeeId ) return ['Requerid employeeId'];
        if( date === undefined ) return ['Requerid Date'];
        if( hour === undefined ) return ['Requerid hour'];
        if( !documentId ) return ['Requerid documentId'];
        if( isActive === undefined ) return ['Requerid isActive'];

        return [undefined, new UpdateAttendanceDto(id, employeeId, date, hour, documentId, isActive)]
    }
}
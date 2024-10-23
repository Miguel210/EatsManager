



export class UpdateAttendanceDto {

    constructor(
        public id: string,
        public employeeId: string,
        public documentId: string,
    ) {}

    static create( props: {[key: string]: any}): [string?, UpdateAttendanceDto?] {

        const {id, employeeId,documentId} = props;
        
        if( !id ) return ['Requerid id'];
        if( !employeeId ) return ['Requerid employeeId'];
        if( !documentId ) return ['Requerid documentId'];

        return [undefined, new UpdateAttendanceDto(id, employeeId, documentId)]
    }
}
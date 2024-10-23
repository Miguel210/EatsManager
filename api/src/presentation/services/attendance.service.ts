import { AttendanceRepositoryImpl } from "../../infraestructure/attendance/repository/attendance.repository.impl";



export class AttendanceService {


    constructor(
        readonly repository: AttendanceRepositoryImpl
    ) {}
}
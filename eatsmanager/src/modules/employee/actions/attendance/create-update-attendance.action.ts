import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Attendance } from "../../interfaces/attendance.interface";




export const createUpdateAttendanceAction = async(attendance: Partial<Attendance>) => {
    
    const attendanceId = attendance.id;

    console.log(attendance);
    

    if( attendance.id  && attendance.id !== '' ) {
        return await updateattendance(attendanceId!, attendance);
    }
    
    return await createattendance(attendance);
}


const updateattendance = async(attendanceId: string, attendance: Partial<Attendance>) => {

    delete attendance.id
    try {
        const {data} = await eatsmanagerApi.post<Attendance>(`/attendance/update/`,{

            id: attendanceId,
            attendance
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading attendance')
        
    }
}

const createattendance = async( attendance: Partial<Attendance>) => {
    
    try {
        const {data} = await eatsmanagerApi.post<Attendance>(`/attendance/create/`, attendance)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating attendance')
        
    }
}
import type { RouteRecordRaw } from 'vue-router'

export const employeeRoutes: RouteRecordRaw = {
    path: '/empleado',
    name: 'empelado',
    component : () => import('@/modules/employee/layouts/employeeLayout.vue'),
    children: [
//todo main (/view/employee/employeeMenu | /view/employee/formView)
        // {
        //     path: '',
        //     name: 'employeeMenu',
        //     component: () => import(''),
        // },
        // {
        //     path: 'empleado/empleados/:empeladoId',
        //     name: '',
        //     props: true,
        //     component: () => import(''),
        // },
//todo attendance (/view/attendance/attendanceView | /view/attendance/formView)
        //{
        //     path: 'empleado/asistencia',
        //     name: '',
        //     component: () => import(''),
        // },
        // {
        //     path: 'empleado/asistencias/:empleadoId',
        //     name: '',
        //     props: true,
        //     component: () => import(''),
        // },
//todo evaluation (/view/evaluation/evaluationView | /view/evaluation/formView)
        //{
        //     path: 'empleado/evaluacion',
        //     name: '',
        //     component: () => import(''),
        // },
        //{
        //     path: 'empleado/evaluaciones/:empleadoId',
        //     name: '',
        //     props: true,
        //     component: () => import(''),
        // },
    ]
}


import type { RouteRecordRaw } from 'vue-router'

export const employeeRoutes: RouteRecordRaw = {
    path: '/empleado',
    name: 'empelado',
    component : () => import('@/modules/employee/layouts/employeeLayout.vue'),
    children: [
//todo main (/view/employee/employeeMenu | /view/employee/formView)
        {
            path: '',
            name: 'employee',
            component: () => import('@/modules/employee/views/employeeVIew.vue'),
        },
        {
            path: 'empleados/:employeeId',
            name: 'empleadoForm',
            props: true,
            component: () => import('@/modules/employee/views/employee/formEmplView.vue'),
        },
//todo attendance (/view/attendance/attendanceView | /view/attendance/formView)
        // {
        //     path: 'empleado/asistencias/:empleadoId',
        //     name: '',
        //     props: true,
        //     component: () => import(''),
        // },
//todo evaluation (/view/evaluation/evaluationView | /view/evaluation/formView)
        {
            path: 'evaluaciones/:evaluationId',
            name: 'evaluationForm',
            props: true,
            component: () => import('@/modules/employee/views/evaluation/formEvalView.vue'),
        },
    ]
}


import * as yup from 'yup'

export const schema = yup.object({
    nombre: yup.string().required('El nombre es requerido'),
    color: yup.string().required('El color es requerido'),
    icono: yup.string().required('El icono es requerido')
})
import * as yup from 'yup'

export const schema = yup.object({
    nombre: yup.string().required("Nombre es requerido"),
    descripcion: yup.string().required("Descripción es requerida"),
    slug: yup.string().required("Slug es requerido"),
    id_pais: yup.number().required("País es requerido"),
    id_departamento: yup.number().required("Departamento es requerido"),
    id_municipio: yup.number().required("Municipio es requerido"),
    id_distrito: yup.number().required("Distrito es requerido"),
    fecha_inicio: yup.string().required("Fecha de inicio es requerida"),
    fecha_fin: yup.string().required("Fecha de fin es requerida"),
    capacidad: yup.number().required("Capacidad es requerida").min(1, "La capacidad debe ser mayor a 0"),
    id_categoria: yup.number().required("Categoría es requerida"),
    localidad: yup.string().required("Localidad es requerida"),
    direccion: yup.string().required("Dirección es requerida"),
    meet_url: yup.string().url("URL de Meet inválida").when("es_online", {
        is: (value) => value === true,
        then: (schema) => schema.required("URL de Meet es requerida")
    }),
    cantidad_asistentes: yup.number().required("Cantidad de asistentes es requerida").min(1, "La cantidad de asistentes debe ser mayor a 0").max(yup.ref('capacidad'), "La cantidad de asistentes no puede exceder la capacidad")
})
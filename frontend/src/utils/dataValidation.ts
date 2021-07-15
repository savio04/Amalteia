import * as yup from 'yup'

// name: string
// email :string
// birth_date: Date
// admission_date: Date
// sector: string
// office: string 
// level: string 
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    admission_date: yup.date().required(),
    birth_date: yup.date().required(),
    setor: yup.string().required(),
    office: yup.string().required(),
    level: yup.string().required()
})

export default schema
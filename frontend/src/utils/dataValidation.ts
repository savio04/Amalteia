import * as yup from 'yup'

const schema = yup.object().shape({
    nameValid: yup.string().required('O nome é obrigatorio'),
    emailValid: yup.string().email('Digite um email valido').required('O email é obrigatorio'),
    admission_dateValid: yup.date().required('Data da admissão é obrigatoria'),
    birth_dateValid: yup.date().required('Data de nascimento é obrigatoria'),
    sectorValid: yup.string().required('Setor é um campo obrigatorio'),
    officeValid: yup.string().required('Cargo é um campo obrigatorio'),
    levelValid: yup.string().required('Nivel é um campo obrigatorio')
})

export default schema
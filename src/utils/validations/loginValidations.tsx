import * as Yup from 'yup'

const validation = Yup.object({
  email: Yup.string()
    .email('E-mail inválido!')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve possuir no mínimo 6 dígitos')
    .required('A senha é obrigatória'),
})

export default validation

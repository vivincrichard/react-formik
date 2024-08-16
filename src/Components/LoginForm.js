import React from 'react'
import * as Yup from 'yup'


function LoginForm() {
  const initialValues = {
    email:'',
    password:''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email'),
    password:Yup.string().required('Required')
})

const onSubmit = values => {
  console.log("submit", values);
}
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm
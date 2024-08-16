import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from '../ReusableComponents/FormikControl'


function LoginForm() {
  const initialValues = {
    email:'',
    password:''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password:Yup.string().required('Required')
})

const onSubmit = values => {
  console.log("submit", values);
}
  return (
    <Formik
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit}
    >
      {
        formik => (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
             control='input'
             type='password'
             label='Password'
             name='password'
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default LoginForm
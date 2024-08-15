import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import FormikControl from './FormikControl';

function FormikContainers() {
    const initialValues ={
        email: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required')
    })
    const onSubmit = values => console.log('submit',values);
  return (
    <Formik
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit}
     >
        {formik =>
            <Form>
                <FormikControl control='input' type='email' label='Email' name='email'/>
                <button type='submit'>Submit</button>
            </Form>
        }
     </Formik>
  )
}

export default FormikContainers
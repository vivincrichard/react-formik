import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import FormikControl from './FormikControl';

function FormikContainers() {
    const dropdownOptions = [
        {key: 'Select an Option',value:''},
        {key: 'Option 1',value:'option1'},
        {key: 'Option 2',value:'option2'},
        {key: 'Option 3',value:'option3'},
        {key: 'Option 4',value:'option4'}
    ]
    const radioOptions = [
        {key:'Option 1',value:'rOption1'},
        {key:'Option 2',value:'rOption2'},
        {key:'Option 3',value:'rOption3'},
    ]
    const checkboxOptions = [
        {key:'Option 1',value:'cOption1'},
        {key:'Option 2',value:'cOption2'},
        {key:'Option 3',value:'cOption3'},
    ]
    const initialValues ={
        email: '',
        description:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        DateOfBirth: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
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
                <FormikControl
                 control='input'
                 type='email'
                 label='Email'
                 name='email'
                />
                <FormikControl
                 control='textarea'
                 label='Description'
                 name='description'
                />
                <FormikControl
                 control='select'
                 label='Select a Topic'
                 name='selectOption'
                 options={dropdownOptions}
                />
                <FormikControl
                 control='radio'
                 label='Radio Topic'
                 name='radioOption'
                 options={radioOptions}
                />
                <FormikControl
                 control='checkbox'
                 label='Checkbox Topics'
                 name='checkboxOption'
                 options={checkboxOptions}
                />
                <FormikControl
                 control='date'
                 label='Pick a Date'
                 name='birthDate'
                />
                <button type='submit'>Submit</button>
            </Form>
        }
     </Formik>
  )
}

export default FormikContainers
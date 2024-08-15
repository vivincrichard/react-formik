

/*
    isSubmitting -> is used to prevent multiple submissions,
        disable the submit button while the form is being submitted,
        and to provide feedback to the user (e.g., changing button text).
*/

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: [''] // Dynamic array using FieldArray from Formik
};

const savedData = {
    name: 'Dummy',
    email: 'dummy@gmail.com',
    channel: 'dummy Channel',
    comments: '#dummy',
    social: {
        facebook: 'dummy facebook',
        twitter: 'dummy twitter'
    },
    phoneNumbers: ['9856472165', '9856741236'],
    phNumbers: [''] // Dynamic array using FieldArray from Formik
};

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    phoneNumbers: Yup.array()
        .of(Yup.string()
            .matches(/^[0-9]+$/, 'Only numbers are allowed'))
});

// onSubmit function to handle form submission
const onSubmit = (values,onsubmitProps) => {   // you can destructure directly by (values,{setSubmitting}) and avoid onSubmitProps
    console.log('submitted', values);
    console.log('onSubmitProps', onsubmitProps);

    const {setSubmitting,resetForm} = onsubmitProps;
    // Simulating an asynchronous operation
    setTimeout(() => {
        setSubmitting(false); // Set submitting to false after API received, so use manually
        resetForm();
    }, 2000);
};

function IsSubmitting() {
    const [savedValues,setSavedValues] = useState(null)
    return (
        <Formik
            initialValues={savedValues || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values, formikHelpers) => {
                onSubmit(values, formikHelpers); // Calls the first onSubmit function
                setTimeout(() => {
                    setSavedValues(null); // Clear saved values after submission
                    formikHelpers.setSubmitting(false); // Make sure to set submitting to false here too
                },2000);
            }}
        >
            {formik => {
                console.log('formik', formik);
                return (
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <Field type='email' id='email' name='email' />
                            <ErrorMessage name='email' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='channel'>Channel</label>
                            <Field type='text' id='channel' name='channel' />
                            <ErrorMessage name='channel' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='comments'>Comments</label> <br />
                            <Field as='textarea' id='comments' name='comments' />
                            <ErrorMessage name='comments' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='facebook'>Facebook</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='twitter'>Twitter</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='primaryPh'>Primary phone number</label>
                            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                            <ErrorMessage name='phoneNumbers[0]' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary phone number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                            <ErrorMessage name='phoneNumbers[1]' component='div' className='error' />
                        </div>

                        <div className='form-control'>
                            <label>List of Phone Numbers</label>
                            <FieldArray name='phNumbers'>

                                {/* code 1: this code shows how many field are there in fieldArray. */}
                                {/* {(fieldArrayProps) => {
                                    console.log('fieldArray', fieldArrayProps);
                                const {push,remove,form} = fieldArrayProps
                                const {values} = form
                                const {phNumbers} = values
                                    return (
                                    <div>
                                        {
                                            phNumbers.map((phNumber,index)=>(
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`} />
                                                    {index > 0 && (
                                                        <button type='button' onClick={() => remove(index)}>-</button>
                                                    )}
                                                    <button type='button' onClick={() => push('')}>+</button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )}} */}

                                {/* code 2: This code destructure the fieldArray like push,remove,form and used  */}
                                {({ push, remove, form }) => {  // fieldArray have so many fields which includes push,remove,form. So we destructure it
                                    console.log('FieldArray Props:', { push, remove, form });
                                    const { values } = form;
                                    const { phNumbers } = values;
                                    return (
                                        <div>
                                            {phNumbers.map((phNumber, index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`} />
                                                    {index > 0 && (
                                                        <button type='button' onClick={() => remove(index)}>-</button>
                                                    )}
                                                    <button type='button' onClick={() => push('')}>+</button>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                }}
                            </FieldArray>
                        </div>
                        <button type='button' onClick={() => setSavedValues(savedData)}>
                            Saved Data
                        </button>
                        <button  type='submit' disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <button type='reset'
                         onClick={() =>{
                            setSavedValues(null)
                            formik.resetForm()
                         }}>Reset</button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default IsSubmitting;

import { ErrorMessage, Field } from 'formik';
import React from 'react'

function Input(props){
    const {label,name,...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label><br/>
        <Field id={name} name={name} {...rest} /><br/>
        <ErrorMessage name={name}/>
    </div>
  )
}

export default Input
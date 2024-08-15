import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePicker = (props) => {
    const {label,name,...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label><br/>
        <Field name={name}>
            {
                (({field,form}) => {
                    const {setFieldValue} = form;
                    const{value} = field;
                    return (
                        <DateView
                            id={name}
                            {...field} // Spread the field props (name, onBlur, etc.)
                            {...rest} // Spread any additional props passed to this component
                            selected={value} // Use the current field value as the selected date
                            onChange={val => setFieldValue(name, val)} // Update the field value on change
                        />
                    )
                })
            }
        </Field><br/>
        <ErrorMessage name={name}/>
    </div>
  )
}

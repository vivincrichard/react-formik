import { ErrorMessage, Field } from 'formik';
import React from 'react'

function RadioBtn(props) {
    const{label,name,options,...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label><br/>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    console.log('field',field);
                    return (
                        options.map((option) => {
                            return(
                                <React.Fragment key={option.key}>
                                    <input
                                     type='radio'
                                     id={option.value}
                                     {...field}
                                     value={option.value}
                                     checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                </React.Fragment>
                            )
                        })
                    )
                }
            }
        </Field><br/>
        <ErrorMessage name={name} />
    </div>
  )
}

export default RadioBtn
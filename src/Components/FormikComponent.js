import { Formik,Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup"
import '../'
const initialValues = {
    name:'',
    email:'',
    channel:'',
    comments:'',
    social: {
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers:[''] // dynamic array using fieldArray from formik
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel:Yup.string().required('Required'),
    comments:Yup.string()
})

const onSubmit = values => {
    console.log('values',values);
}

function FormikComponent() {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        // validateOnMount
        onSubmit={onSubmit}>
            {formik => {
                console.log('formik',formik);
                return (
                    <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name'>
                        {(er) => <div className='error'>{er}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email'/>
                    <ErrorMessage name='email'>
                        {(er) => <div className='error'>{er}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel'/>
                    <ErrorMessage name='channel'>
                        {(er) => <div className='error'>{er}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label> <br/>
                    <Field as='textarea' id='comments' name='comments'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter</label>
                    <Field type='text' id='twitter' name='social.twitter'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
                </div>

                <div className='form-control'>
                    <label>List of Phone Numbers</label>
                    <FieldArray name='phNumbers'>
                        {(fieldArrayProps) => {
                            const {push,remove,form} = fieldArrayProps
                            const {values} = form
                            const {phNumbers} = values
                            return <div>
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
                        }}
                    </FieldArray>

                </div>

                <button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button>
            </Form>
                )
            }}
    </Formik>
  )
}

export default FormikComponent;

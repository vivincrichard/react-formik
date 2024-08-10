import { Formik,Form, Field, ErrorMessage } from "formik";
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
    }
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
        onSubmit={onSubmit}>
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
                <button type='submit'>Submit</button>
            </Form>
    </Formik>
  )
}

export default FormikComponent;

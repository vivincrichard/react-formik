import { useFormik } from "formik";
import * as Yup from "yup"

const initialValues = {
    name:'',
    email:'',
    channel:''
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel:Yup.string().required('Required')
})

const onSubmit = values => {
    console.log('values',values);
}

function YupFormValidation() {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                name='name'
                {...formik.getFieldProps('name')} // refactoring concept
            />
            {formik.touched.name && formik.errors.name ?
                (
                    <div className='error'>{formik.errors.name}</div>
                ) : null
            }
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                name='email'
                {...formik.getFieldProps('email')}
            />
            {
                formik.touched.email && formik.errors.email ?
                (
                    <div className='error'>{formik.errors.email}</div>
                ) : null
            }
            <label htmlFor='channel'>Channel</label>
            <input
                type='text'
                id='channel'
                name='channel'
                {...formik.getFieldProps('channel')}
            />
            {
                formik.touched.channel && formik.errors.channel ?
                (
                    <div className='error'>{formik.errors.channel}</div>
                ) : null
            }
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YupFormValidation;

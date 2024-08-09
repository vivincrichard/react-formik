
import {useFormik} from 'formik'



const initialValues = {
    name:'',
    email:'',
    channel:''
}

const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name='Required'
    }

    if(!values.email) {
        errors.email='Required'
    }else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
        errors.email = 'Invalid email format'
    }

    if(!values.channel){
        errors.channel='Required'
    }

    return errors;
}

const onSubmit = values => {
    console.log('values',values)
}

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('values',formik.value);
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
             type='text'
             id='name'
             name='name'
             value={formik.values.name}
             onChange={formik.handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input
             type='email'
             id='email'
             name='email'
             value={formik.values.email}
             onChange={formik.handleChange}
            />
            <label htmlFor='channel'>Channel</label>
            <input
             type='text'
             id='channel'
              name='channel'
              value={formik.values.channel}
              onChange={formik.handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
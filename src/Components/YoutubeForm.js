import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
};


const onSubmit = values => {
    console.log('values', values);
};

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log('visit', formik.touched);

    return (
        <div className='youtubepage'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div> ) : null
                    }
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        value={formik.values.channel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;

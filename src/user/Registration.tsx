import React from 'react';
import { Formik, FormikHandlers, FormikProps } from 'formik';
import * as Yup from 'yup';
import CountryDropdown from './CountryDropdown';
import DisplayFormikError from '../components/DisplayFormikError';
import './User.css';

const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    phone: '',
    country: ''
}
const VALIDATION_SCHEMA = Yup.object().shape({
    firstName: Yup.string()
        .min(6, "First Name should be greater than 5 charater")
        .required('This is required field'),
    lastName: Yup.string()
        .min(6, "Last Name should be greater than 5 charater")
        .required('This is required field'),
    phone: Yup.number()
        .integer()
        .typeError('Phone number should be numeric')
        .min(10, "Phone number should be 10 digit long")
        .required('This is required field'),
    country: Yup.string().required('This is required field'),
});

function Registration() {
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const [frmValues, setFrmValues] = React.useState<typeof INITIAL_VALUES>(INITIAL_VALUES);

    React.useEffect(() => {
        setFrmValues(INITIAL_VALUES);
    }, [submitted])

    const handleFormSubmit = (
        values: typeof INITIAL_VALUES,
        { setSubmitting, setErrors, setStatus, resetForm }: any
    ) => {
        console.log(values, ' values');
        setSubmitted(true);
        // Saving data using fetch API or axios
        // fetch('{website}/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(values),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        // Reset Form when successfully saved
        resetForm();
        setSubmitting(false);
        setErrors(false);
        setStatus({ success: true })
    };

    return (
        <div className='form-container'>
            <Formik
                initialValues={frmValues}
                onSubmit={handleFormSubmit}
                validationSchema={VALIDATION_SCHEMA}
                enableReinitialize={true}
            >
                {({ handleChange, handleSubmit, resetForm, values, setFieldValue, handleBlur }) => {
                    const handleCountryChange = (val: string) => {
                        setFieldValue('country', val);
                    }
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1>Register</h1>
                                {/* Display Loader when submmiting */}
                                {submitted ? <p style={{ color: 'green', fontWeight: 600 }}>'Your account has been created.'</p> : <p>Please fill in this form to create an account.</p>}
                                <hr />
                                <div className='Form-Group-Container'>
                                    <div><label htmlFor="firstName" >First Name</label></div>
                                    <input
                                        type="text"
                                        placeholder="Enter First Name..."
                                        name="firstName"
                                        id="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                    />
                                    <DisplayFormikError name="firstName" />
                                </div>
                                <div className='Form-Group-Container'>
                                    <div><label htmlFor="lastName">Last Name</label></div>
                                    <input
                                        type="text"
                                        placeholder="Enter Last Name..."
                                        name="lastName"
                                        id="lastName"
                                        onChange={handleChange}
                                        value={values.lastName}
                                    />
                                    <DisplayFormikError name="lastName" />
                                </div>
                                <div className='Form-Group-Container'>
                                    <div><label htmlFor="phone">Phone Number</label></div>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        name="phone"
                                        id="phone"
                                        onChange={handleChange}
                                        value={values.phone}
                                    />
                                    <DisplayFormikError name="phone" />
                                </div>
                                <div className='Form-Group-Container'>
                                    <div><label htmlFor="country">Country</label></div>
                                    <CountryDropdown onChange={handleCountryChange} value={values.country} />
                                    <DisplayFormikError name="country" />
                                </div>
                                <hr />
                                <button type="button" onClick={() => resetForm()}>Reset</button> <button type="submit">Register</button>
                            </div>
                        </form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default Registration;

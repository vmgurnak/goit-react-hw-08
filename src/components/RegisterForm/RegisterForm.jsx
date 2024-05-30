import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { apiRegisterUser } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

// Validation shema
const FeedbackShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'User name must be at least 3 characters!')
    .max(50, 'User name must be less than 50 characters!')
    .required('User name is required!'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters!')
    .required('Password is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
});

// initialValues
const initialValues = {
  name: '',
  email: '',
  password: '',
};

// Component ContactForm with Formik
const RegisterForm = () => {
  const dispatch = useDispatch();
  // id for label and field
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  // Callback function for Submit
  const handleSubmitFormik = (values, actions) => {
    dispatch(apiRegisterUser(values));
    actions.resetForm();
  };

  return (
    <div className={css.contactFormWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitFormik}
        validationSchema={FeedbackShema}
      >
        <Form className={css.contactForm} autoComplete="off" noValidate>
          <label className={css.contactFormLabel} htmlFor={nameId}>
            Name
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              placeholder="Enter name"
              type="text"
              name="name"
              id={nameId}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="div"
            />
          </div>

          <label className={css.contactFormLabel} htmlFor={emailId}>
            Email
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              placeholder="Enter email"
              type="email"
              name="email"
              id={emailId}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="div"
            />
          </div>

          <label className={css.contactFormLabel} htmlFor={passwordId}>
            Password
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              placeholder="Enter password"
              type="password"
              name="password"
              id={passwordId}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="div"
            />
          </div>
          <button
            className={css.contactFormBtn}
            title="Click to register user"
            type="submit"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

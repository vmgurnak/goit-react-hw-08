import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';

import css from './RegisterForm.module.css';
// import { addContact } from '../../../../goit-react-hw-07/src/redux/contactsOps';

// Validation shema
const FeedbackShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

// initialValues
const initialValues = {
  name: '',
  email: '',
  password: '',
};

// Component ContactForm with Formik
const RegisterForm = () => {
  // const dispatch = useDispatch();
  // id for label and field
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  // Callback function for Submit
  const handleSubmitFormik = (values, actions) => {
    console.log(values);
    // dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.contactFormWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitFormik}
        validationSchema={FeedbackShema}
      >
        <Form className={css.contactForm} autoComplete="off">
          <label className={css.contactFormLabel} htmlFor={nameId}>
            Name
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
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
          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

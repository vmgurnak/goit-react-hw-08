import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

// Validation shema
const FeedbackShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'User name must be at least 3 characters!')
    .max(50, 'User name must be less than 50 characters!')
    .required('Name is required!'),
  number: Yup.string()
    .min(6, 'Number must be at least 6 characters!')
    .required('Number is required!'),
});

// initialValues
const initialValues = {
  name: '',
  number: '',
};

// Component ContactForm with Formik
const ContactForm = () => {
  const dispatch = useDispatch();
  // id for label and field
  const nameId = useId();
  const numberId = useId();

  // Callback function for Submit
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    // onAddContact(values);
    actions.resetForm();
  };

  return (
    <div className={css.contactFormWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackShema}
      >
        <Form className={css.contactForm} autoComplete="off">
          <label className={css.contactFormLabel} htmlFor={nameId}>
            Name
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              placeholder="Enter Name"
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

          <label className={css.contactFormLabel} htmlFor={numberId}>
            Number
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              placeholder="+(380)-000-00-00"
              type="text"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="div"
            />
          </div>
          <button
            className={css.contactFormBtn}
            type="submit"
            title="Click to create new contact"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import DocumentTitle from '../../components/DocumentTitle';
import Searchbox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>ContactsPage</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />
        <Searchbox />
        {loading && <Loader />}
        {error && <ErrorMessage />}

        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;

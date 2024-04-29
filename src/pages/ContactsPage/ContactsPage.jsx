import ContactForm from '../../components/ContactForm/ContactForm';
import DocumentTitle from '../../components/DocumentTitle';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div>
      <DocumentTitle>ContactsPage</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />
        {/* <SearchBox />
        {loading && <Loader />}
        {error && <ErrorMessage />} */}

        {/* <ContactList /> */}
      </div>
    </div>
  );
};

export default ContactsPage;

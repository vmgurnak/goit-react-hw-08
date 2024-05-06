import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';
import { selectFilterContacts } from '../../redux/contacts/slice';

const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <div className={css.contactListWrap}>
      <ul className={css.contactList}>
        {filterContacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

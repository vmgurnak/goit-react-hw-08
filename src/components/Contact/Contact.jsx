// react icons
import { FaPhone } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactWrap}>
      <div className={css.contactData}>
        <div className={css.contactCont}>
          <div className={css.contactIconWrap}>
            <IoIosContact className={css.contactIcon} size="24" />
          </div>
          <p className={css.contactTitle}>{name}</p>
        </div>
        <div className={css.contactCont}>
          <div className={css.contactIconWrap}>
            <FaPhone className={css.contactIcon} size="18" />
          </div>
          <p className={css.contactTitle}>{number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={() => handleOnClick(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import c from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <div className={c.contact}>
      <div className={c.info}>
        <div className={c.name}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={c.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={() => {
          deleteContact(id);
        }}
        className={c.delete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

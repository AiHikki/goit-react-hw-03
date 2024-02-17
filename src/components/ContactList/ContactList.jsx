import Contact from '../Contact/Contact';
import c from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={c.list}>
      {contacts.map(contact => (
        <li className={c.listItem} key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

import s from './Phonebook.module.css';

import { useDeleteContactMutation } from 'redux/reducer';
const ContactList = ({ contacts, filter }) => {
  const [deleteContacts] = useDeleteContactMutation();
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {filtered.map(contact => {
        return (
          <li className={s.li} key={contact.id}>
            {contact.name} : {contact.phone}
            <button
              className={s.button}
              type="button"
              onClick={() => {
                deleteContacts(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { useGetContactsQuery, useAddContactMutation } from 'redux/reducer';

import { useState } from 'react';
function Phonebook() {
  const { data } = useGetContactsQuery('');
  const [addContact] = useAddContactMutation();
  const [filter, setFilter] = useState('');
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={data} />
      <h2>Contacts</h2>
      {data && <ContactList contacts={data} filter={filter} />}
      <Filter setFilter={setFilter} />
    </div>
  );
}
export default Phonebook;

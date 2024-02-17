import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import './App.css';

const App = () => {
  const savedContacts = JSON.parse(localStorage.getItem('saved-contacts')) ?? [];
  const [contacts, setContacts] = useState(savedContacts);
  const [filteredContacts, setFilteredContacts] = useState(savedContacts);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery));
    setFilteredContacts(filtered);
  }, [contacts, searchQuery]);

  const handleSearchQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };

  const handleAddContact = (newContact, { resetForm }) => {
    setContacts(prevContacts => [...prevContacts, { ...newContact, id: nanoid() }]);
    resetForm();
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleAddContact} />
      <SearchBox value={searchQuery} handleChange={handleSearchQueryChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;

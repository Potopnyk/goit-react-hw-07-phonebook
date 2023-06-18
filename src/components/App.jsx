import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ContactForm } from './phonebook/contactForm';
import { ContactList } from './contactList/ContactsList';
import { Filter } from './filter/Filter';
import { NameHeader, SecondaryNameHeader, Section } from './App.styled';

export const App = () => {
  return (
    <Section>
      <NameHeader>Phonebook</NameHeader>

      <ContactForm />
      <SecondaryNameHeader>Contacts</SecondaryNameHeader>
      
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </Section>
  );
};
import React, { Component } from 'react';
import shortid from 'shortid';
import contacts from './components/ContactsList/contacts.json'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactsList';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts,
    filter: '',
  }

  handleChangeName = e =>{
    const {name, value} = e.target
    this.setState(
      {[name]: value})
      console.log(e.target.name)
  };

  checkContactName = name => {
    const {contacts} = this.state
    if (contacts.find(contact =>
    contact.name.toLowerCase() === name.toLowerCase()
    ))
    return alert(`${name} is already in contacts.`)
    }

  addContact = ({name, number}) => {
    this.checkContactName(name);
   console.log({name, number})
   const contact = {
   id: shortid.generate(),
   name,
   number,
   }
   this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]}))
   };

   

   getVisibleContacts = () => {
    const {contacts, filter} =this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact=> contact.name.toLocaleLowerCase().includes(normalizedFilter)||
    contact.number.includes(normalizedFilter));

   }

  deleteContact = (contactId) => {
    this.setState(({contacts})=> ({
      contacts: contacts.filter(contact=> contact.id !== contactId)
    }))
  };

  render() {
    const {contacts, filter} =this.state;
   
    const visibleContacts =  this.getVisibleContacts()
    const countContacts = contacts.length
    return (
      <div className="container">
        <h1>Phonebook</h1>
        
        <ContactForm 
        onSubmit={this.addContact}/>

        <h2>Contacts</h2>
        <Filter 
        filter={filter}
        onChangeName={this.handleChangeName}
        />
        <p> Total contacts: {countContacts}</p>
        <ContactList 
        contacts={visibleContacts} 
        onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

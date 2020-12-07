import React from 'react';

import Contacts from './Contacts';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [
        {
            name: 'Ceyhun Bahadır Çelik',
            phone: '+90 111 111 11 11',
        },
        {
            name: 'Şeyma Başar',
            phone: '+90 222 222 22 22',
        },
        {
            name: 'Kaan Çelik',
            phone: '+90 333 333 33 33',
        }
    ]
  }

  addContact(contact){
     const { contacts } = this.state;
     contacts.push(contact);

     this.setState({
       contacts
     });
     
  }

  render() {
    return (
      <div>
        <Contacts
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
      </div>
    )
  };
}

export default App;

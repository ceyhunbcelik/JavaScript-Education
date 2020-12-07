import React from 'react';

import List from './List';
import Form from './Form';

class Contacts extends React.Component{

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

    render() {
      return (
        <div className={'contact-wrapper'}>
          <List contacts={this.state.contacts} />
          <Form />
        </div>
      )
    };
}

export default Contacts;
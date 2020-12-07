import React from 'react';

import List from './List';

import '../css/contact.css';

class Contacts extends React.Component{
    render() {
      return (
        <div className={'contact-wrapper'}>
          <List />
        </div>
      )
    };
}

export default Contacts;
import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import Form from './Form';

class Contacts extends React.Component{
    render() {
      return (
        <div className={'contact-wrapper'}>
          <List contacts={this.props.contacts} />
          <Form
            addContact={this.props.addContact}
          />
        </div>
      )
    };
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func
}

export default Contacts;
import React from 'react';

import List from './List';
import Form from './Form';

class Contacts extends React.Component{
    render() {
      return (
        <div className={'contact-wrapper'}>
          <List contacts={this.props.contacts} />
          <Form />
        </div>
      )
    };
}

export default Contacts;
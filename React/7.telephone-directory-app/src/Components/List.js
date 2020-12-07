import React from 'react';
import PropTypes from 'prop-types';
import '../css/list.css';

class List extends React.Component{

    render() {
      return (
        <div>
          <div className={'listArea'}>
            <input name={'filter'} id={'filter'} placeholder={'Name or Phone..'} />

            <ul className={'list'}>
              {
                this.props.contacts.map(contact => 
                  <li key={contact.phone}>
                    <span className={'name'}>{contact.name}</span>
                    <span className={'phone'}>{contact.phone}</span>
                    <span className={'clearfix'}></span>
                </li>
                )
              }
            </ul>
          </div>
        </div>
      )
    };
}

List.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default List;
import React from 'react';
import PropTypes from 'prop-types';

import '../css/list.css';

class List extends React.Component{

    constructor(){
      super();
      this.onChangeFilterText = this.onChangeFilterText.bind(this);
    }

    state = {
      filterText: ''
    }

    onChangeFilterText(e){
      //console.log(e.target.value);
      this.setState({
        filterText: e.target.value
      })
    }



    render() {

      const filteredContacts = this.props.contacts.filter(
        contact => {
          return contact.name.toLowerCase().indexOf(
            this.state.filterText.toLowerCase()
          ) !== -1
        }
      );

      return (
        <div>
          <div className={'listArea'}>
            <input
              value={this.state.filterText}
              onChange={this.onChangeFilterText}
              name={'filter'}
              id={'filter'}
              placeholder={'Name or Phone..'}
            />

            <ul className={'list'}>
              {
                filteredContacts.map(contact => 
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
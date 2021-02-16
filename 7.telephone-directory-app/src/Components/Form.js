import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{

    constructor(){
      super();
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
      name: '',
      phone: ''
    };

    onChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();
      
      this.props.addContact({
        ...this.state
      });

      this.setState({
        name: '',
        phone: ''
      })

    }

    render() {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              name="name"
              id="name"
              placeholder="Enter a Name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <br />
            <input
              name="phone"
              id="phone"
              placeholder="Enter a Phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
            <button>Add</button>
          </form>
        </div>
      )
    };
}

Form.propTypes = {
  addContact: PropTypes.func
}

export default Form;
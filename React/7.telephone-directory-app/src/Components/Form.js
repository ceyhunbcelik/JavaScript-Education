import React from 'react';

class Form extends React.Component{

    constructor(){
      super();
      this.onChange = this.onChange.bind(this);
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

    render() {
      return (
        <div>
          <form>
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

export default Form;
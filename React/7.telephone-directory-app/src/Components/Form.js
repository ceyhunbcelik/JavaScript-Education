import React from 'react';

class Form extends React.Component{
    render() {
      return (
        <div>
          <form>
            <input name="name" id="name" placeholder="Enter a Name" />
            <br />
            <input name="phone" id="name" placeholder="Enter a Phone" />
            <button>Add</button>
          </form>
        </div>
      )
    };
}

export default Form;
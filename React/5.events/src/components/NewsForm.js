import React from 'react';

class NewsForm extends React.Component{

    /* Facebook recomment contructor instead of arrow function
    constructor(props){
        super(props);
        //this.addButton = this.addButton.bind(this);
    }*/

    addButton = () => {
        //console.log('Clicked!');
        this.props.addNews();
    }

    render() {
      return (
        <div>
          <button onClick={this.addButton}>Add</button>
        </div>
      )
    };
}

export default NewsForm;
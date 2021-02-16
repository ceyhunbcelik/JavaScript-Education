import React from 'react';

class NewsForm extends React.Component{

    /* Facebook recomment contructor instead of arrow function "addButton" 1.1
    constructor(props){
        super(props);
        //this.addButton = this.addButton.bind(this);
    }*/

    /* 1.2
    addButton = () => {
        //console.log('Clicked!');
        this.props.addNews();
    }
    */

    /*
    render() {
      return (
        <div>
          <button onClick={this.addButton}>Add</button>
        </div>
      )
    };
    */

    //-------------------

    render() {
      return (
        <div>
          <button onClick={ () => this.props.addNews() }>Add</button>
        </div>
      )
    };

}

export default NewsForm;
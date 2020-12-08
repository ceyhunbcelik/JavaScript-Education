import React from 'react';

//import Child from './Child';
import Form from './Form';

class App extends React.Component {

    /*
  state = {
    name: 'Ceyhun'
  }
  constructor(){
    super();
    console.log('constructor Running..');

    this.changeName = this.changeName.bind(this);
  }

  componentWillMount(){
    console.log('componentWillMount Running..')
  }

  changeName(){
    this.setState({
      name: 'Kaan'
    })
  }

  render() {
    console.log('Render Running..')
    return (
      <div>
        {this.state.name}
        <Child name={this.state.name} />
        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  };

  componentDidMount(){
    console.log('componentDidMount Running..');

    ----
    setTimeout(() => {
      this.setState({
        name: 'Çelik'
      })
    }, 2000);
    ----
  };
  */

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  };

}

export default App;

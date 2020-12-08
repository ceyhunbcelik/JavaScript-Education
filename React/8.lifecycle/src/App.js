import React from 'react';

class App extends React.Component {

  state = {
    name: 'Ceyhun' // First
  }
  constructor(){
    super();
    console.log('constructor Running..');

    this.state = {
      name: 'Bahadır' // Second
    }
  }

  componentWillMount(){
    console.log('componentWillMount Running..')
  }

  render() {
    console.log('Render Working')
    return (
      <div>{this.state.name}</div>
    )
  };
}

export default App;

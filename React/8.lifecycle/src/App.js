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

  componentDidMount(){
    console.log('componentDidMount Running..');

    setTimeout(() => {
      this.setState({
        name: 'Çelik'
      })
    }, 2000);
  };
  

}

export default App;

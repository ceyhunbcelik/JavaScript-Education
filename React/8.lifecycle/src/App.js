import React from 'react';

import Child from './Child';

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
    console.log('Render Running..')
    return (
      <div>
        {this.state.name}
        <Child />
      </div>
    )
  };

  componentDidMount(){
    console.log('componentDidMount Running..');

    /*
    setTimeout(() => {
      this.setState({
        name: 'Çelik'
      })
    }, 2000);
    */
  };
  

}

export default App;

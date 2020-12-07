import React from 'react';

import Counter from './Counter';

class App extends React.Component {

  /*
  c onstructor(props){
    super(props);
    this.state = {
      name: 'Ceyhun'
    }
  }*/

  /*
  state = {
    name: 'Ceyhun'
  };

  changeName(){
    this.setState({
      name: 'BAHADIR'
    });
  };

  render() {
    return (
      <div>
        {this.state.name}
        <br />
        <button onClick={this.changeName.bind(this)}>Change the Name</button>
      </div>
    )
  };
  */

  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  };
}

export default App;

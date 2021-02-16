import React from 'react';

import Counter from './Counter';
import Footer from './Footer';

class App extends React.Component {

  /*
  constructor(props){
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
        <Footer />
      </div>
    )
  };
}

export default App;

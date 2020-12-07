import React from 'react';

class App extends React.Component {

  /*
  constructor(props){
    super(props);
    this.state = {
      name: 'Ceyhun'
    }
  }*/
  state = {
    name: 'Ceyhun'
  };

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  };
}

export default App;

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
}

export default App;

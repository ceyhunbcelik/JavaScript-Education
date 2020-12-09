import React from 'react';
import Axios from 'axios';

import Posts from './Components/Posts';

import './App.css';

class App extends React.Component {

  state = {
    posts: []
  }

  render() {
    return (
      <div className="App">
        <Posts {...this.state} />
      </div>
    )
  };

  componentDidMount(){
    Axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(response => {
      this.setState({
        posts: response.data
      });
    })
  }

}

export default App;

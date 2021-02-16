import React from 'react';
import Axios from 'axios';

import Posts from './Components/Posts';
import Users from './Components/Users';

import './App.css';

/*
class App extends React.Component {

  state = {
    posts: [],
    users: []
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
        <hr />
        <Users users={this.state.users} />
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
    });

    Axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then(response => {
      this.setState({
        users: response.data
      });
    });
  }

}
*/

import FirstNumber from './Components/FirstNumber';
import SecondNumber from './Components/SecondNumber';

// Pure Component
class App extends React.Component{

  state = {
    firstNumber: Math.random(),
    secondNumber: Math.random()
  }

  render() {
    return (
      <div>
        <FirstNumber firstNumber={this.state.firstNumber} />
        <hr />
        <SecondNumber secondNumber={this.state.secondNumber} />
      </div>
    )
  };

  componentDidMount(){
    setInterval(() => {
      this.setState({
        firstNumber: Math.random()
      })
    }, 2000)
  }
}

export default App;

import React from 'react';
import Axios from 'axios';

import Posts from './Components/Posts';
import Users from './Components/Users';

import './App.css';

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

export default App;

import React from 'react';
import './App.css';

import Axios from 'axios';

class App extends React.Component {

  state = {
    users: [],
    isLoading: true
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <h1>Users</h1>
        {isLoading ? 'Loading..' : ''}
        {
          !isLoading ? this.state.users.map(user =>
            <div key={user.id}>
              {user.name} - @{user.username}
            </div>
          ) : null
        }
      </div>
    )
  };

  componentDidMount(){
    Axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then(response => {
      this.setState({
        users: response.data,
        isLoading: false
      })
    });
  }
  
}

export default App;

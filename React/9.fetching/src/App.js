import React from 'react';
import './App.css';

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
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => {
        this.setState({
          users,
          isLoading: false
        })
      })
  }
  
}

export default App;

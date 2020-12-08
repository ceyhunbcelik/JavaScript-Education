import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

const News = () => {
  return (<h1>News Page</h1>)
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={
              () => {
                return(<h1>Home Page</h1>)
              }
            }
          />
          <Route
            path="/contact"
            exact
            strict
            render={
              () => {
                return(<h1>Contact Page</h1>)
              }
            }
          />
          <Route
            path="/news"
            exact
            component={News}
          />
        </div>
      </Router>
    )
  };
}

export default App;

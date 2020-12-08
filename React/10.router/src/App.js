import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import './App.css';

const News = (route) => {
  const id = route.match.params.id;
  return (<h1>News Page {id}</h1>)
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/*
          <Link to="/">Home</Link><br />
          <Link to="/contact">Contact</Link><br />
          <Link to="/news/1">News</Link>
          */}
          <NavLink activeClassName="activelink" exact to="/">Home</NavLink><br />
          <NavLink activeStyle={{color: 'red'}} exact to="/contact">Contact</NavLink><br />
          <NavLink activeStyle={{color: 'red'}} exact to="/news/1">News</NavLink>
          
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
            path="/news/:id"
            exact
            component={News}
          />
        </div>
      </Router>
    )
  };
}

export default App;

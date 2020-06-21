import React from 'react';
import Login from '../pages/Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components'
import Posts from '../pages/Posts'
import Users from '../pages/Users'
import { connect} from 'react-redux'

const Background = styled.div`
    background-color:#282c34;
    width: 100%;
    height: 100%;
    `
function App() {
  return (

    <Router >
      <Route exact path="/" component={Login} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/users" component={Users} />
    </Router>
  );
}
function mapStateToProp({}){
  return {}
}

export default connect(mapStateToProp, {
  
})(App);

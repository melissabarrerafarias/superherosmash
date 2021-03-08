import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const client = new ApolloClient({
    request: operation => {
      const token = localStorage.getItem('token');

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    },
    uri: '/graphql'
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <div className="login-signup">
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

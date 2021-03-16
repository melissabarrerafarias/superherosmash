import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BattleGround from "./components/BattelgroundMock";
import DiscussionBoard from "./pages/DiscussionBoard";
import SingleThread from "./pages/SingleThread";
import MyThreads from "./pages/MyThreads";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import StatsPage from "./pages/Stats";
//Semantic ui
import "semantic-ui-css/semantic.min.css";

function App() {
  const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem("token");

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },
    uri: "/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/battleground" component={BattleGround} />
          <Route exact path="/discussionboard" component={DiscussionBoard} />
          <Route exact path="/comment/:id" component={SingleThread} />
          <Route exact path="/mythreads/:username?" component={MyThreads} />
<<<<<<< HEAD
          <Route exact path="/checkout" component={Checkout} />
=======
          <Route exact path="/stats" component={StatsPage} />
>>>>>>> develop
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

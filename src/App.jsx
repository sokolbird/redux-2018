import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import Search from "./containers/Search";
import Form from "./containers/Form";
import List from "./containers/List";

import storeCreator from "./store";

const store = storeCreator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          search by title: <Search searchField="title" />
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;

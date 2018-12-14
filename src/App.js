import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import List from './components/List';
import Form from './containers/Form';

import storeCreator from './store';

const store = storeCreator();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Form />
                <List />
            </div>
        </Provider>
    );
  }
}

export default App;

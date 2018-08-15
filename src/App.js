import React, { Component } from 'react';
import Content from './components/Content/Content';
import './App.css';

// Redux
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content />          
      </Provider>
    );
  }
}

export default App;

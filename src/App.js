import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import {Provider} from 'react-redux';
import configureStore from './store/index';
const  store =  configureStore();

class App extends Component {
  componentDidMount() {
    store.subscribe(()=>{
        localStorage.setItem('loginStore', JSON.stringify(store.getState()))
    });
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Login/>
      </div>
      </Provider>
    );
  }
}

export default App;

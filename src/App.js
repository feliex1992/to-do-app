import React from 'react';
import './scss/style.scss';
import BaseComponent from './BaseComponent';
import Login from './pages/Login';
import Home from './pages/Home';

import userStore from './store/user';
import todosStore from './store/todos';

window.userStore = userStore;
window.todosStore = todosStore;

export default class App extends BaseComponent {
  state = {
    isInitialized: false,
  }

  render() {
    console.log('Init: ', userStore.data.email, " ", !this.state.isInitialized);
    if (!this.state.isInitialized) {
      return null;
    }

    return (
      userStore.data.email ? (
        <Home />
      ) : (
        <Login />
      )
    );
  }

  async componentDidMount() {
    await userStore.initialize();
    this.setState({
      isInitialized: true,
    });

    this.unsubUser = userStore.subscribe(this.rerender);
  }

  async componentDidUpdate() {
    if (userStore.data.email && !todosStore.isInitialized) {
      console.log('popup initialize all offline data...');
      console.log("set name: ", userStore.data.id);
      todosStore.setName(userStore.data.id);
      await todosStore.initialize();
      console.log('popup done');
    }
  }
 
  componentWillUnmount() {
    this.unsubUser();
  }
}

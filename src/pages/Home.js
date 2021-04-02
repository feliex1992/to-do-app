import React from 'react';
import BaseComponent from '../BaseComponent';

import userStore from '../store/user';

import AddNewTodo  from '../components/AddNewTodo';
import TodoList from '../components/TodoList';

class Home extends BaseComponent {
  componentDidMount() {
    this.unsubTodos = todosStore.subscribe(this.rerender);
  }

  componentWillUnmount() {
    this.unsubTodos();
  }

  render() {
    return (
      <div>
        <AddNewTodo />
        <TodoList />
      </div>
    )
  }
}

export default Home;
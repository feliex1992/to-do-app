import React from 'react';

const AddNewTodo = React.lazy(() => import('../components/AddNewTodo'));
const TodoList = React.lazy(() => import('../components/TodoList'));

const Home = () => {
  return (
    <div>
      <AddNewTodo />
      <TodoList />
    </div>
  );
}

export default Home;
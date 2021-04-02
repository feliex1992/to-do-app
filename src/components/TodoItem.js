import React from 'react';
import moment from 'moment';

import {
  CButton,
  CButtonGroup,
  CListGroupItem
} from '@coreui/react';

const TodoItem = (props) => {
  const deleteTodo = async (id) => {
    todosStore.deleteItem(id, userStore.data);
  }

  const updateTodo = async (id) => {
    todosStore.editItem(id, { statDone: true });
  }

  return (
    <CListGroupItem action>
      <h5 className="d-flex w-100 justify-content-between">
        {props.no_task}
        <small>{moment(props.createdAt).format('DD-MMM-YYYY HH:mm')}</small>
      </h5>
      <div className="d-flex w-100 justify-content-between">
        <div className="mb-1">
          {props.text}
        </div>
        <CButtonGroup>
          <CButton disabled={props.statDone} size="md" color="success" onClick={() => updateTodo(props._id) }>Done</CButton>
          <CButton size="md" color="danger" onClick={() => deleteTodo(props._id) }>Delete</CButton>
        </CButtonGroup>
      </div>
    </CListGroupItem>
  );
}

export default TodoItem;
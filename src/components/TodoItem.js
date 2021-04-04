import React, { useState } from 'react';
import BaseComponent from '../BaseComponent';
import moment from 'moment';

import {
  CButton,
  CButtonGroup,
  CInput,
  CListGroupItem
} from '@coreui/react';

const TodoItem = (props) => {
  console.log(props);
  const [text, setText] = useState(props.text);
  const [strTags, setTags] = useState(props.tags);
  const [modeEdit, setModeEdit] = useState(false);
  
  const editTags = () => {

  }

  const editTodo = () => {
    if (modeEdit) {
      todosStore.editItem(props._id, { text, tags: strTags.split(',').map(t => t.trim().toLowerCase()) });
    };
    setText(props.text);
    setTags(props.tags.join(', '));
    setModeEdit(!modeEdit);
  }

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
        {(modeEdit? (<CInput type="text" id="todo-add" name="todo-add" placeholder="Content" onChange={(e) => setText(e.target.value)} value={text} />) : props.text)}
      </div>
      <div className="d-flex w-100 justify-content-between mt-3">
        {(modeEdit? (<CInput type="text" id="todo-add-tags" name="todo-add-tags" placeholder="Tags" onChange={(e) => setTags(e.target.value)} value={strTags} />) : props.tags.join(', '))}
        <CButtonGroup className="sm-12">
          <CButton disabled={(props.statDone || modeEdit)} color="success" onClick={() => updateTodo(props._id) }>Done</CButton>
          <CButton disabled={props.statDone} color="warning" onClick={editTodo}>{(modeEdit ? 'Simpan': 'Update')}</CButton>
          <CButton disabled={modeEdit} color="danger" onClick={() => deleteTodo(props._id) }>Delete</CButton>
        </CButtonGroup>
      </div>
    </CListGroupItem>
  );
}

export default TodoItem;
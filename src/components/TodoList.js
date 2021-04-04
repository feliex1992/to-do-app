import React, { useState } from 'react';
// import { usePouchy } from 'pouchy-store';
import todosStore from '../store/todos';
import moment from 'moment';

import {
  CContainer,
  CCard,
  CCardHeader,
  CCardBody,
  CLabel,
  CListGroup,
  CSwitch
} from '@coreui/react';

import TodoItem from './TodoItem';

const TodoList = () => {
  const [showDone, toggleShowDone] = useState(false);
  const showTodos = todosStore.data.filter((todo) => todo.statDone === showDone);
  return (
    <CContainer>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          last upload: {moment(todosStore.dataMeta.tsUpload).format('DD-MMM-YYYY HH:mm')}
          <div className="d-flex align-content-center">
            <CLabel className="mr-2">Show Done Task: </CLabel>
            <CSwitch 
              color='success'
              variant='3d'
              value={showDone}
              onClick={() => toggleShowDone(!showDone)}
            />
          </div>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            {
              showTodos.map((todo, index) => (
                <div key={index}>
                  <TodoItem key={index} {...todo} no_task={index + 1}  />
                </div>
              ))
            }
          </CListGroup>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default TodoList;
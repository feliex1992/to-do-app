import React from 'react';

import {
  CContainer,
  CCard,
  CCardHeader,
  CCardBody,
  CListGroup
} from '@coreui/react';

const TodoItem = React.lazy(() => import('./TodoItem'));

const TodoList = () => {
  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          Last Upload: 2021-03-04
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <TodoItem />
          </CListGroup>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default TodoList;
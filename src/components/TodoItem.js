import React from 'react';

import {
  CButton,
  CListGroupItem
} from '@coreui/react';

const TodoItem = () => {
  return (
    <CListGroupItem action>
      <h5 className="d-flex w-100 justify-content-between">
        1
        <small>3 days ago</small>
      </h5>
      <div className="d-flex w-100 justify-content-between">
        <div className="mb-1">
          Todo APP 1
        </div>
        <CButton size="lg" color="danger">X</CButton>
      </div>
    </CListGroupItem>
  );
}

export default TodoItem;
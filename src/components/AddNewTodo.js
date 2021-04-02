import React from 'react';

import userStore from '../store/user';
import todosStore from '../store/todos';

import {
  CButton,
  CCard, 
  CCardBody,
  CCardHeader,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CNavbar,
  CNavbarBrand,
  CNavbarNav
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

class AddNewTodo extends React.Component {
  state = {
    input_text: ''
  };

  upload = async () => {
    console.log('uploading...');
    try {
      await todosStore.upload();
      console.log('upload done');
    } catch (err) {
      alert(err.message);
      console.log('upload failed');
    }
  }

  setInput_text = (event) => {
    this.setState({
      input_text: event.target.value,
    });
  }

  addTodo = async (e) => {
    e.preventDefault();
    await todosStore.addItem({
      text: this.state.input_text,
      statDone: false
    }, userStore.data);
    this.setState({ input_text: '' });
    console.log(userStore.data);
  }

  logout = async () => {
    await todosStore.deinitialize();
    await userStore.deleteSingle();
  }

  render() {
    const { id = '-', email = '-' } = userStore.data;
    return (
      <div className="mt-3 c-default-layout flex-row align-items-center">
        <CContainer>
          <CCard color="primary" className="text-white">
            <CCardHeader>
              <CNavbar expandable="sm" >
                <CNavbarBrand>
                  <h1>Todo App</h1>
                </CNavbarBrand>
                <CCollapse show={false} navbar>
                  <CNavbarNav className="ml-auto">
                    <CDropdown
                      inNav
                    >
                      <CDropdownToggle className="text-light">
                        {email}
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={this.logout}>
                          <CIcon name="cil-account-logout" />
                          Logout
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CNavbarNav>
                </CCollapse>
              </CNavbar>
            </CCardHeader>
            <CCardBody>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                </CInputGroupPrepend>
                <CInput type="text" size="lg" id="todo-add" name="todo-add" placeholder="Todo" onChange={this.setInput_text} value={this.state.input_text} />
                <CInputGroupPrepend>
                  <CButton onClick={this.addTodo} size="lg" color="success">Submit</CButton>
                </CInputGroupPrepend>
              </CInputGroup>
              <CInputGroup>
                <h3 className="mt-4 mr-3">Todos:</h3>
                <CButton className="mt-3" size="lg" color="warning" onClick={this.upload}>Upload ({todosStore.countUnuploadeds()})</CButton>
              </CInputGroup>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    )
  }
}

export default AddNewTodo;
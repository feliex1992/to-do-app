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
  CNavbarNav,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

class AddNewTodo extends React.Component {
  state = {
    input_text: '',
    tags: [],
    todos: []
  };

  constructor(props) {
    super(props);
  }

  syncData = async () => {
    const todos = await todosStore.getTodos();
    this.setState({
      todos
    });
  }

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

  setInput_tags = (e) => {
    let tags;
    if (e.target.value.trim().length > 0) {
      tags = e.target.value.split(',').map(t => t);
    } else {
      tags = [];
    }

    this.setState({
      tags
    })
  }

  addTodo = async (e) => {
    e.preventDefault();
    await todosStore.addItem({
      text: this.state.input_text,
      tags: this.state.tags.map(t => t.trim().toLowerCase()),
      statDone: false
    }, userStore.data);
    this.setState({ 
      input_text: '',
      tags: ''
    });
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
                <CInput type="text" size="lg" id="todo-add" name="todo-add" placeholder="Content" onChange={this.setInput_text} value={this.state.input_text} />
              </CInputGroup>

              <CInputGroup className="mt-2">
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                </CInputGroupPrepend>
                <CInput type="text" size="lg" id="todo-add-tags" name="todo-add-tags" placeholder="Tags (seperate with commas)." onChange={this.setInput_tags} value={this.state.tags.join()} />
                <CButton className="ml-2" onClick={this.addTodo} size="lg" color="success">Submit</CButton>
              </CInputGroup>

              <CInputGroup>
                <h3 className="mt-4 mr-3">Todos:</h3>
                <CButton className="mt-3 mr-3" size="lg" color="warning" onClick={this.upload}>Upload ({todosStore.countUnuploadeds()})</CButton>
              </CInputGroup>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    )
  }
}

export default AddNewTodo;
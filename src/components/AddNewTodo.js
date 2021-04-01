import React from 'react';
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

const AddNewTodo = () => {
  return (
    <div className="mt-3 c-default-layout flex-row align-items-center">
      <CContainer>
        <CCard color="primary" className="text-white">
          <CCardHeader>
            <CNavbar expandable="sm" >
              <CNavbarBrand>
                <h1>Todo List</h1>
              </CNavbarBrand>
              <CCollapse show={false} navbar>
                <CNavbarNav className="ml-auto">
                  <CDropdown
                    inNav
                  >
                    <CDropdownToggle className="text-light">
                      jafar.pahrudin@gmail
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>
                        <CIcon name="cil-account-logout" className="mfe-2" />
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
              <CInput type="text" size="lg" id="todo-add" name="todo-add" placeholder="Todo" />
              <CInputGroupPrepend>
                <CButton size="lg" color="success">Submit</CButton>
              </CInputGroupPrepend>
            </CInputGroup>
            <CInputGroup>
              <h3 className="mt-4 mr-3">Todos:</h3>
              <CButton className="mt-3" size="lg" color="warning">Upload</CButton>
            </CInputGroup>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default AddNewTodo;
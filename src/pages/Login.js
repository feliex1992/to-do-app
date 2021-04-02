import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import userStore from '../store/user';
import BaseComponent from '../BaseComponent';

class Login extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    if (!this.state.email) {
      alert('gunakan email @gmail');
      return;
    }
    if (!this.state.email.endsWith('@gmail.com')) {
      alert('gunakan email @gmail.com');
      return;
    }

    let id = this.state.email;
    id = id.split('@').shift().replace(/\W/g, '');

    await userStore.editSingle({
      id,
      email: this.state.email,
    });
    console.log("cek email: ", userStore.data.email)
  }
  
  setEmail = (e) => {
    this.setState(() => ({
      email: (e.target.value || '').trim()
    }));
  }

  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="6" sm="12">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" value={this.state.email} onChange={this.setEmail} placeholder="Your Email" autoComplete="username" />
                      </CInputGroup>
                      <CRow> 
                        <CCol xs="6">
                          <CButton type="submit" color="primary" className="px-4">Login</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
  
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Login

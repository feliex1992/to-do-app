import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const Login = React.lazy(() => import('./pages/login/Login'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path='/login' name="Login Page" render={props => <Login {...props}/>} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));

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
            <Route exact path='/' name="Home Page" render={props => <Home {...props}/>} />
            <Route exact path='/login' name="Login Page" render={props => <Login {...props}/>} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
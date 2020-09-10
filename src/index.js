import { createBrowserHistory } from 'history';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./store/configStore";
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { LoadingSpinner } from './components/ui/LoadingSpinner/LoadingSpinner';
import { GlobalStyle } from "./utils/GlobalStyles";
import {Header} from "./components/ui/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute";

const MainPage = lazy(() => import('./Pages/Main'));
const PublicReposPage = lazy(() => import('./Pages/PublicRepos'));
const AuthReposPage = lazy(() => import('./Pages/AuthRepos'));
const LoginPage = lazy(() => import('./Pages/Login'));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <Router history={history}>
      <Suspense fallback={ <LoadingSpinner /> } >
        <Switch>
          <Route path="/public" component={PublicReposPage} exact/>
          <Route path="/" component={MainPage} exact/>
          <PrivateRoute path="/authRepos" component={AuthReposPage} exact/>
          <Route path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

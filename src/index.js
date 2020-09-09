import { createBrowserHistory } from 'history';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./store/configStore";
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { LoadingSpinner } from './components/ui/LoadingSpinner/LoadingSpinner';
import { GlobalStyle } from "./utils/GlobalStyles";

const MainPage = lazy(() => import('./Pages/Main'));
const LoginPage = lazy(() => import('./Pages/Login'));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router history={history}>
      <Suspense fallback={ <LoadingSpinner /> } >
        <Switch>
          <Route path="/repos" component={MainPage} exact/>
          <Route path="/login" component={LoginPage} />
          <Route path="/repos/:id" component={()=>{}} />
          <Redirect from="/" to="/repos" exact />
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

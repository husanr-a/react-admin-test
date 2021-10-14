import React, { Fragment } from "react";
import { HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Layouts from "./pages/layout";
import Login from "./pages/login";
import routes from './router'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path='/login' key={1} component={Login}></Route>
          <Route path='/' key={2} component={Layouts}></Route>
        </Switch>
      </HashRouter>
    </Fragment>
    // <div>
    //   this is react
    // </div>
  );
}

export default App;

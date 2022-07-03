import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Pages/Menu';
import SubMenu from './Pages/SubMenu';
import About from './Pages/About';
function Routes() {
    return (
        <Switch>
             <Route exact from="/" render={props => <Menu {...props} />} />
             <Route exact from="/subMenu" render={props => <SubMenu {...props} />} />
             <Route exact path="/about" render={props => <About {...props} />} />
        </Switch>
    )
}

export default Routes;
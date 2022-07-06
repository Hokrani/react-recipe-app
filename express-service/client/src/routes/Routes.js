import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../components/pages/Menu';
import SubMenu from '../components/pages/SubMenu';
import About from '../components/pages/About';
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
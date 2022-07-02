import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoriesGrid from './Pages/CategoriesGrid';
import About from './Pages/About';
function Routes() {
    return (
        <Switch>
             <Route exact from="/" render={props => <CategoriesGrid {...props} />} />
             <Route exact path="/about" render={props => <About {...props} />} />
        </Switch>
    )
}

export default Routes;
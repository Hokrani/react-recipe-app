import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            {/* <Route exact path="/*" component={Error404}></Route> */}
        </Switch>
    )
}

export default Routes;
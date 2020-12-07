import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ListContainer from './containers/ListContainer';
import Dev from './components/Dev';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route  path='/rick' component={ ListContainer }/>
            <Route  path='/dev' component={ Dev }/>
        </Switch>
    );
}

export default Routes;
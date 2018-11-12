import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Details from './Landing/Details';
import Landing from './Landing/Landing';
import Signup from './Header/Signup';
import Login from './Header/Login';
import Home from './Home/Home';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                 </Switch> 
            
        )
    }
 }
 export default Routes;
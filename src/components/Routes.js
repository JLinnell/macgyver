import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Details from './Landing/Details';
import Landing from './Landing/Landing';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Landing} />
                </Switch> 
            
        )
    }
 }
 export default Routes;
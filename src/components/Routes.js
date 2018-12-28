import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Details from './Landing/Details';
import Landing from './Landing/Landing';
import Signup from './Navbar/Signup';
import LogIn from './Navbar/LogIn';
import Home from './Home/Home';
import HackForm from './HackForm/HackForm';
import HackList from './HackList/HackList';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/details" exact component={Details} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/logIn" exact component={LogIn} />
                <Route path="/home" exact component={Home} />
                <Route path="/create" exact component={HackForm} />
                <Route path="/list" exact component={HackList} />

                 </Switch> 
            
        )
    }
 }
 export default Routes;
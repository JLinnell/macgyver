import React, { Component } from 'react';
/*import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';*/

// CSS
import './Home.css';

// Components
import Header from '../Header/Header';
import LogIn from '../Header/LogIn';
import SignUp from '../Header/SignUp';
import Landing from '../Landing/Landing';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: null
		}
	}

	render() {

		return (
        <div>
          <Header />
          <SignUp />
          <LogIn/>
          <Landing/>

          </div>
		)

	}
}

export default Home;
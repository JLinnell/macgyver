import React, { Component } from 'react';
import './Home.css';
import HackList from '../HackList/HackList';
import HackForm from '../HackForm/HackForm';

class Home extends Component {
	
	render() {

		return (
        <div className="Home">
		  <HackForm />
		 <HackList />
        </div>
		)

	}
}

export default Home;


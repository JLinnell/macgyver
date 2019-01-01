import React, { Component } from 'react';
import './Home.css';
import HackList from '../HackList/HackList';
import HackForm from '../HackForm/HackForm';
import LogOut from '../Navbar/LogOut';

class Home extends Component {
	
	

	render() {

		return (
			<div>
				<nav>
					<LogOut />
				</nav>
				<div className="Home">
					<HackForm />
					<HackList />
				</div>
		    </div>
			
		)

	}
}


export default Home;
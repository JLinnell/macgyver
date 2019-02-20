import React, { Component } from 'react';
import './Landing.css';
import HackList from '../HackList/HackList';
//import { fetchByItem } from '../../actions/hackActions';


 /*onClick(event) {
	event.preventDefault();
    this.props.fetchByItem(landingSearch)
}*/

class Landing extends Component {
	render() {
		return (
			<div className="Landing">
				{/* <input type="text" className="landingSearch" placeholder="item to use"></input>
				<button type="submit" className="hack-search-btn" >Search</button> */}
				<HackList />
			</div>
		)
	}
}

export default Landing;

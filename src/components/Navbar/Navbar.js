import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
        this.state = {
		 isOpen: false,
			showLogOut: false
        };
	}

	
	render() {
		return (
			<nav id="mainNav" className="navbar">
			    <div className="container">
			        	<p className="navbarL-brand">Macgyver</p>
						<p className="subtitle">Turn Your Trash Into Treasures!</p>
			            <ul className="navbar-nav ml-auto">
			                <li className="nav-item">
			                    <Link className="nav-link"  to={'/details'}>Details</Link>
			                </li>
			                <li className="nav-item">
			                	<Link className="nav-link" to={'/signup'}>Signup</Link>
			                </li>
							<li className="nav-item">
                				<Link className="nav-link main"  to={'/'}>Back</Link>
           					 </li>
			            </ul>
				
					<div>{ this.state.showLogOut ? <LogOut /> : null }</div>
			        </div>
			</nav>
		)
	}
}


export default Navbar;

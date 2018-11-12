/*import React, { Component } from 'react';

class Navbar extends Component {
    render() {
      return (
        <nav className="main-nav">
        <ul className="nav-items">
          <li>
            <button className="login-btn">Login</button>
            
          </li>
          <li>
            <button className="signup-btn">Signup</button>
          </li>
        </ul>
      </nav>
      );
    }
  }
  
  export default Navbar;*/

  import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*import './Header.css';*/

class Navbar extends Component {
	render() {
		return (
			<nav id="mainNav" className="navbar fixed-top navbar-toggleable-md navbar-light">
			    <div className="container">
			    	<div className="brand-container">
			        	<a className="navbarL-brand" href="#page-top">Macgyver</a>
			        </div>
			        <div className="collapse navbar-collapse" id="navbarExample">
			            <ul className="navbar-nav ml-auto">
			                <li className="nav-item">
			                    <a className="nav-link" href="#details">Details</a>
			                </li>
			                <li className="nav-item">
			                	<Link className="nav-link" to={'/signup'}>Sign Up</Link>
			                </li>
			            </ul>
			        </div>
			    </div>
			</nav>
		)
	}
}

export default Navbar;
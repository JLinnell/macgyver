/*import React, { Component } from 'react';
import './Header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <header>
           <h1 className="title">Macgyver</h1>
          <Link to="/Jon">Jon</Link>
          <Link to="/Judy">Judy</Link>
            <Navbar />
        </header>
      );
    }
  }
  
  export default Header;*/

import React, { Component } from 'react';


import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    
	
  	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
  	}

  	render() {
    	return (
			<div>
				<h1>Macgyver</h1>
							
      		</div>
		);
  	}
}

export default Header;

  

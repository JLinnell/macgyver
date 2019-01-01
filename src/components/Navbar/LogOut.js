import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {logoutUser} from '../../actions/userActions';
import {connect} from 'react-redux';

class LogOut extends Component {
	constructor(props) {
		super(props);
		this.logOutUser = this.logOutUser.bind(this);
        this.state = {
			 isOpen: false
			
        };
	}

	
	
	logOutUser(){
        this.props.logoutUser();
        localStorage.removeItem('email');
        localStorage.removeItem('userID');
		console.log("Logging Out");
      };
      
      render() {
		return (
            <div>
                <button  
                      className="logOut" type="button" >
                      <Link className="link" to="/" onClick={this.logOutUser.bind(this)}>Log Out</Link>
                    </button>
			        </div>

)
}
}

const mapStateToProps = (rootReducer) => {
	return {
			user: rootReducer.user
}
}

export default connect(mapStateToProps, {logoutUser})(LogOut);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, loginUser} from '../../actions/userActions';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}
	handleChange(event) {
		const stateKey = event.currentTarget.attributes["name"].value; 
		this.setState({[stateKey]: event.currentTarget.value});
		console.log(event.currentTarget.attributes["name"].value);
		console.log(event.currentTarget.value);
		}

	resgisterUser(event){
    	event.preventDefault();
	    console.log(this.state);

    let user = {
      email: this.state.email,
      password: this.state.password
    };

	this.props.registerUser(this.state)
	this.props.history.push('/login')


 this.setState({
      email: "",
      password: "",
    });
  }
	render() {
		return (
			<div className="container">
			    <div className="row">
			        <div className="form_bg">
			            <form className="signUpForm" onSubmit={this.resgisterUser.bind(this)}>
			                 <h2 className="text-center">Sign Up</h2>
			                <br/>
			                <div className="form-group">
			                    <input
									name="email"
									onChange={this.handleChange.bind(this)}
			                    	className="form-control"
			                    	type="text"
									placeholder="email"
									value={this.state.email}
			                    />
			                </div>
			                <div className="form-group">
			                    <input
									name="password"
									onChange={this.handleChange.bind(this)}
			                    	className="form-control"
			                    	type="password"
									placeholder="password"
									value={this.state.password}
			                    />
			                </div>
			                <br/>
			                <div className="align-center">
			                   <button
	   								className="btn btn-success"
									   type="submit"
									   >
	   							Sign Up
	   							</button>
							</div> 
							
			                <div>Already have an account?<Link to={'/logIn'}>Log In</Link></div>
			            </form>
			        </div>
			    </div>
			</div>
			
		)
	}
}


const mapStateToProps = (rootReducer) => {
    return {user: rootReducer.user}
}

export default connect(mapStateToProps, {registerUser, loginUser})(SignUp);
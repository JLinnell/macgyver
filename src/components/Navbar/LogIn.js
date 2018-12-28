import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions';



class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			/*token: '',
			secret: '',
			user: '',
			error: {
				code: '',
				message: '',
			}*/
		}
	}
			
	//takes obj key as name so you only have to input function once (so all info is can be used)
	handleChange(event) {
		const stateKey = event.currentTarget.attributes["name"].value; 
		this.setState({[stateKey]: event.currentTarget.value});
		console.log(event.currentTarget.attributes["name"].value);
		console.log(event.currentTarget.value);
		}
	
	/*handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		axios.post('http://localhost:1212/users/login', {email: this.state.email, password: this.state.password})
			.then(function (response) {
				// handle success
				console.log(response.data.data);
				localStorage.setItem('token', response.data.data.token);
				localStorage.setItem('uid', response.data.data.id);
				window.location.pathname = 'home';

			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
		}*/	

		loginUser(event){
			event.preventDefault();
			
			this.props.loginUser(this.state)
			//window.location.pathname = 'home'
			//browserHistory.push('/home')
			this.props.history.push('/home')

		
		
			this.setState({
			  username: "",
			  password: ""
			});
		
		  }


	
	 
	render() {
		return (
			<div className="container">
			    <div className="row">
			        <div className="form_bg">
			            <form className="logInForm">
			                 <h2 className="text-center">Log In</h2>
			                <br/>
			                <div className="form-group">
			                    <input
									onChange={this.handleChange.bind(this)}
									name="email"
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
                          onClick={this.loginUser.bind(this)}> Log In
                        </button>
						
                        <div className="demoUser">
							<div className="col-6">
								<p className="demo-creds">Demo User</p>
							</div>
							<div className="col-6">
								<p className="demo">Email: <span className="italic">demo1</span></p>
							</div>
							<div className="col-6">
								<p className="demo">Password: <span className="italic">passwordispassword</span></p>
							</div>
							</div>
                      </div>
			                <div>Don't have an account?<Link to={'/signup'}> Sign Up </Link>instead</div>
			            </form>
			        </div>
			    </div>
			</div>
				
		)
	}
}


const mapStateToProps = (rootReducer) => {
	return {
			user: rootReducer.user
}
}

export default connect(mapStateToProps, {loginUser})(LogIn);


//cut from line 104
//{localStorage.getItem('token') && (<Redirect to='/home'/>)}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			secret: '',
			user: '',
			error: {
				code: '',
				message: '',
			}
		}
	}

	handleKeyDown(e) {
		if(e.keyCode === 13 && !this.state.user) {
			this.signIn(e);
		}
	}

	componentWillMount() {
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown.bind(this));
	}
	
	 /* LogIn(e) {
		e.preventDefault();
		const { email , password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}
	// added to provide employers with a quick way to get into the app without signing in or registering (as per capstone requirements)
	demoLogIn(e) {
		e.preventDefault();
		firebaseApp.auth().signInWithEmailAndPassword('test@test.com', 'test1234')
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}
}*/

	render() {
		return (
			<div className="container">
				<h1 className="realemboss text-center">Macgyver</h1>
				<h5 className="text-center">Easily accessible news about the most common programming languages</h5>
			    <div className="row">
			        <div className="form_bg">
			            <form className="logInForm" /*onSubmit={(e) => this.logIn(e)}*/>
			                 <h2 className="text-center">Log In</h2>
			                <br/>
			                <div className="form-group">
			                    <input
			                    	className="form-control"
			                    	type="text"
			                    	placeholder="email"
			                    	onChange={event => this.setState({email: event.target.value})}
			                    />
			                </div>
			                <div className="form-group">
			                    <input
			                    	className="form-control"
			                    	type="password"
			                    	placeholder="password"
			                    	onChange={event => this.setState({password: event.target.value})}
			                    />
			                </div>
			                <br/>
			                <div>{this.state.error.message}</div>
			               
			                <div className="align-center">
			                   <button
	   								className="btn btn-success"
	   								type="submit"
	   							>
	   							Sign In
	   							</button>
			                   <button
	   								className="btn btn-demoLogIn"
	   								type="button"
	   								/*onClick={(e) => <Link to={'/home'}></Link>}*/
	   							>
	   							Demo Log In
	   							</button>
			                </div>
			                <div style={{ marginTop: 10 }}>Don't have an account?<Link to={'/signup'}> Sign Up </Link>instead</div>
			            </form>
			        </div>
			    </div>
			</div>
				
		)
	}
}
export default LogIn;
import React, { Component } from 'react';


class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
            name: '',
			email: '',
			password: ''
			
		}
	}

	render() {
		return (
			<div className="container">
				<h1>Macgyver</h1>
			    <div className="row">
			        <div>
			            <form className="signInForm">
			                 <h2 className="text-center">Sign In</h2>
			                <br/>
                            <div className="form-group">
			                    <input
			                    	className="form-input"
			                    	type="text"
			                    	placeholder="name"
			                    />
			                </div>
			                <div className="form-group">
			                    <input
			                    	className="form-input"
			                    	type="text"
			                    	placeholder="email"
			                    />
			                </div>
			                <div className="form-group">
			                    <input
			                    	className="form-input"
			                    	type="password"
			                    	placeholder="password"
			                    />
			                </div>
			                <br/>
			                <div className="align-center">
			                   <button
	   								className="btn"
	   								type="submit"
	   							>
	   							Sign In
	   							</button>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
				
		)
	}
}
export default LogIn;
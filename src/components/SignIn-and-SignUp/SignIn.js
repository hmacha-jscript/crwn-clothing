import React, { Component } from "react";
import './form-input.styles.scss';

export default class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState((state) => {
			return { email: "", password: "" };
		});
	};

	handleChange = (e) => {
        let {name, value} = e.currentTarget;

        this.setState(state=>{
            return {[name] : value}
        })
	};
	render() {
		return (
			<div className="sign-in">
				<h2>already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input
						type="email"
						name="email"
						value={this.state.email}
						required
						onChange={this.handleChange}
					/>
					<label>Email</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<label>Password</label>

					<input type="submit" value="Submit form" />
				</form>
			</div>
		);
	}
}

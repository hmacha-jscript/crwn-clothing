import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../Form/FormInput/FormInput";
import "./sign-in-and-sign-up.styles.scss";

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
		let { name, value } = e.currentTarget;

		this.setState((state) => {
			return { [name]: value };
		});
	};
	render() {
		return (
			<div className="sign-in">
				<div className="title">
					<h2>already have an account</h2>
					<span>Sign in with your email and password</span>
				</div>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						required
						label="email"
						handleChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						label="password"
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type="submit" value="Submit form">
						Sign In
					</CustomButton>
				</form>
			</div>
		);
	}
}

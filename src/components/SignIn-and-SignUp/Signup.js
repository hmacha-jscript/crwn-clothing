import React, { Component } from "react";
import FormInput from "../Form/FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import "./sign-up.styles.scss";

export default class Signup extends Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState((state) => {
			return (state[name] = value);
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords donot match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						label="DisplayName"
						value={displayName}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						label="Email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						onChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

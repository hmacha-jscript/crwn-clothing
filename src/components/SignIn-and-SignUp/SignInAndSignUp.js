import React from "react";
import SignIn from "./SignIn";
import Signup from "./Signup";
import "./sign-in-and-sign-up.styles.scss";

export default function SignInAndSignUp() {
	return (
		<div className="sign-in-and-sign-up">
			<Signup />
			<SignIn />
		</div>
	);
}

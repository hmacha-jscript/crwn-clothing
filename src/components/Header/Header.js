import React from "react";
import { ReactComponent as Logo } from "./crown.svg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";

function Header({ currentUser }) {
	return (
		<div className="header">
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<Link className="option" to="" onClick={() => auth.signOut()}>
						SIGN-OUT
					</Link>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(Header);

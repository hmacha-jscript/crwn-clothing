import React, { Component } from "react";
import HomePage from "./components/Homepage/HomePage";
import "./components/Homepage/Homepage.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./components/SignIn-and-SignUp/SignInAndSignUp";
import {
	auth,
	createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUserAction } from "./redux/user/userAction";

class App extends Component {
	unsubscribeFromAuth = "";

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				//check whether user is persisted in db.
				userRef.onSnapshot((snapshot) => {
					this.props.setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				this.props.setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		let { currentUser } = this.props;
		console.log(currentUser);
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					{/* <Route path="/signin" component={SignInAndSignUp} /> */}
					<Route
						path="/signin"
						render={() => {
							return currentUser ? <Redirect to="/" /> : <SignInAndSignUp />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
	};
};

const mapStateToProps = (state) => {
	return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from "react";
import HomePage from "./components/Homepage/HomePage";
import "./components/Homepage/Homepage.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./components/SignIn-and-SignUp/SignInAndSignUp";
import {
	auth,
	createUserProfileDocument,
} from "./components/firebase/firebase.utils";

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: "",
		};
	}

	unsubscribeFromAuth = "";
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				//check whether user is persisted in db.
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		console.log(this.state.currentUser);
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/signin" component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;

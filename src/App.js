import React, { Component } from "react";
import HomePage from "./components/Homepage/HomePage";
import "./components/Homepage/Homepage.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./components/SignIn-and-SignUp/SignInAndSignUp";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
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

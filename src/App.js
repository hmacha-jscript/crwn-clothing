import React, { Component } from "react";
import HomePage from "./components/Homepage/HomePage";
import "./components/Homepage/Homepage.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		);
	}
}

export default App;

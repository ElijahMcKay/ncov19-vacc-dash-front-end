import React from "react";
import { Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import About from "./pages/About";

import "./main.scss";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Main} />
			<Route path="/about" component={About} />
			<Footer />
		</div>
	);
}

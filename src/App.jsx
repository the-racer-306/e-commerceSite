import React from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
// import Homepage from "./pages/hompage/Homepage.component";
// import ShopPage from "./pages/shop/shop.component";

function App() {
	return (
		<div>
			<SignInSignUp />
		</div>
	);
}

export default App;

{
	/* <Routes>
	<Route exact path="/" component={Homepage} />
	<Route path="/shop" component={ShopPage} />
</Routes> */
}

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/hompage/Homepage.component";
// import SignInSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
// import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>Hats Page</div>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				go to main Page
			</button>
		</>
	);
};

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	);
}

export default App;

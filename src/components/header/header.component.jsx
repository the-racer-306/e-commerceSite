import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "./crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to={"/"} className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			{currentUser ? (
				<div className="name">Hello {currentUser.displayName}</div>
			) : null}
			<Link to={"/shop"} className="option">
				Shop
			</Link>
			<Link to={"/shop"} className="option">
				Contact
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					<div>SIGN OUT</div>
				</div>
			) : (
				<Link className="option" to="/signIn">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

export default Header;

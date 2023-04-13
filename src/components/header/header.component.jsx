import React from "react";
import { connect } from "react-redux"; // have access to thing Related to Redux
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "./crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);

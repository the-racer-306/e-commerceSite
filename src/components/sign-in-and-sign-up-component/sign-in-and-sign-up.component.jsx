import React, { Component } from "react";

import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../sign-in/sign-in.component";
import SignUP from "../sign-up/sign-up.component";
const SignInAndSignUpPage = () => (
	<div className="sign-in-up-page">
		<SignIn />
		<SignUP />
	</div>
);

export default SignInAndSignUpPage;

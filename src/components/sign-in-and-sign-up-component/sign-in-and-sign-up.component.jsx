import React, { Component } from "react";
import "./sign-in-and-sign-up.styles.scss";
export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an accound</h2>
				<span>Sign in with your email and password</span>

				<form action="" onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>

					<label htmlFor="password">password</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<input type="submit" value={"Sing In"} />
				</form>
			</div>
		);
	}
}

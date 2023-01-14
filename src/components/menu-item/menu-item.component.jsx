import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	const navigate = useNavigate();
	<div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
		<div
			style={{ backgroundImage: `url(${imageUrl})` }}
			className="background-image"
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">Shop Now</span>
		</div>
	</div>;
};

export default MenuItem;

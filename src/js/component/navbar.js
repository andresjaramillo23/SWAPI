import React from "react";
import { Link } from "react-router-dom";
import starWarsImage from "../../img/starWars.png";
import rigoImage from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="img-responsive"
					src={starWarsImage}
					style={{
						width: 120,
						height: 80
					}}
					alt="logo"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

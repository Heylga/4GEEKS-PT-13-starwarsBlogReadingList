import React from "react";
import { Link } from "react-router-dom";
import Star from "../../img/star80.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 justify-content-around">
			<Link to="/">
			<img src={Star} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
  					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    				Dropdown button
  					</button>
  							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   						 		<li><a className="dropdown-item" href="#">Action</a></li>
    							<li><a className="dropdown-item" href="#">Another action</a></li>
   				 				<li><a className="dropdown-item" href="#">Something else here</a></li>
  							</ul>
				</div>
			</div>
		</nav>
	);
};

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import star80 from "./../../img/star80.png"

//LIBRERIA BOOTSTRAP FOR REACT

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 justify-content-around">
			<Link to="/">
			<img src={star80} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					  <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
				<DropdownToggle caret className="dropdownButton">
					Favorites{" "}
						{store.favorite.length}
				</DropdownToggle>
				<DropdownMenu right>
					{store.favorite.length > 0 ? (
						store.favorite.map((favorite, index) => {
							return (
								<DropdownItem key={index}>
									<div className="favAndTrash">
										{favorite}
										<i
											id="delete"
											className="far fa-trash-alt pointer trash"
											onClick={() => {
												actions.deleteFavorite({ index });
											}}
										/>
									</div>
								</DropdownItem>
							);
						})
					) : (
						<DropdownItem>
							<p>Emty</p>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>

				</div>
			</div>
		</nav>
	);
};

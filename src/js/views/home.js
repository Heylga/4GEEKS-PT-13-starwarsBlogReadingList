import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Yoda from "../../img/yoda.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.js";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
		actions.loadingData("vehicles");
	}, []);
	console.log("People", store.people);
	console.log("Planets", store.planets);
	console.log("Vehicles", store.planets);
	return (
		<div>
			<div className="container-fluid">
				<div className="characters">
					<h2>Characters</h2>
						{store.people.map((character, index) => {
							return (
								<Card
									key={index}
									name={character.name}
									descriptionOne={character.gender}
									descriptionTwo={character.hair_color}
									descriptionThree={character.eye_color}
									id={index}
									section="character"
								/>
							);
						})}
				</div>


				<div className="container-fluid">
					<div className="planets">
						<h2>Planets</h2>
						<div className="card-body">
							{store.planets.map((planets, index) => {
								return (
									<Card
										key={index}
										name={planets.name}
										descriptionFour={planets.population}
										descriptionFive={planets.terrain}
										id={index}
										section="planets"
									/>
								);
							})}
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="vehicles">
						<h2>vehicles</h2>
						<div className="card-body">
							{store.vehicles.map((vehicles, index) => {
								return (
									<Card
										key={index}
										name={vehicles.name}
										descriptionSix={vehicles.rotation_period}
										descriptionSeven={vehicles.orbital_period}
										id={index}
										section="vehicles"
									/>
								);
							})}
						</div>
					</div>
				</div>


			</div>
		</div>
	);
};

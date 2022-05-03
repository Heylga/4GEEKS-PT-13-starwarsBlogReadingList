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
		actions.loadingData("starships");
	}, []);
	console.log("People", store.people);
	console.log("Planets", store.planets);
	console.log("starships", store.planets);
	return (
		<div>
			<div className="container-fluid">
				<div className="characters">
					<h2>Characters</h2>
					<div className="container-cards">
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
				</div>


					<div className="planets">
						<h2>Planets</h2>
						<div className="container-cards">
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



					<div className="starships">
						<h2>starships</h2>
						<div className="container-cards">
							{store.starships.map((starships, index) => {
								return (
									<Card
										key={index}
										name={starships.name}
										descriptionSix={starships.model}
										descriptionSeven={starships.manufacturer}
										id={index}
										section="starships"
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

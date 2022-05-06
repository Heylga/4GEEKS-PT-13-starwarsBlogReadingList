import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Yoda from "../../img/yoda.jpg";
import "../../styles/home.css";
import { People } from "../component/people.js";
import { Planets } from "../component/planets.js";
import { Starships } from "../component/starships.js";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("people");
		actions.loadingData("planets");
		actions.loadingData("starships");
	}, []);

	console.log("People", store.people);
	console.log("Planets", store.planets);
	console.log("starships", store.starships);


	return (
		<div>
			<div className="container-fluid">
				<div className="characters">
					<h2>Characters</h2>
					<div className="container-cards">
						{store.people.map((character, index) => {
							return (
								<People
									key={index}
									name={character.name}
									descriptionOne={character.gender}
									descriptionTwo={character.hair_color}
									descriptionThree={character.eye_color}
									id={character.id}
									section="character"
								/>
							);
						})}
						</div>
				</div>



				<div className="Planets">
					<h2>Planets</h2>
					<div className="container-cards">
						{store.planets.map((planet, index) => {
							return (
								<Planets
									key={index}
									name={planet.name}
									population={planet.population}
									terrain={planet.terrain}
									id={index}
									section="planets"
								/>
							);
						})}
						</div>
				</div>

				<div className="Starships">
					<h2>Starships</h2>
					<div className="container-cards">
						{store.starships.map((starship, index) => {
							return (
								<Starships
									key={index}
									name={starship.name}
									model={starship.model}
									manufacturer={starship.manufacturer}
									id={index}
									section="starships"
								/>
							);
						})}
						</div>
				</div>




			</div>
		</div>
	);
};

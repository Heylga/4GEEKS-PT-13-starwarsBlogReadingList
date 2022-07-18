import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";


export const Sinchar = (props) => { 

	const {store,actions} = useContext(Context);

	let params = useParams();
	
		useEffect( ()=> {
			actions.getPeopleById(params.uid)
		},[])

    return (
		<div>
		<div className="container">

				<div className="d-flex">
            		
					<img
                        // src={
                        //   "https://starwars-visualguide.com/#/planets?page=1" + ".jpg"
                        // }
						src={
							"https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
						  }
                        className="card-img-top"
                        alt="Star Wars Planets"
                      />
				<div>

					<h4 className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam a nulla malesuada tincidunt sit amet eget eros. 
					Integer elementum porttitor enim. Maecenas suscipit metus a sem iaculis, in posuere ex hendrerit. 
					Aliquam sed rhoncus nunc, eu faucibus nisi. Fusce pulvinar finibus porttitor. 
					Praesent ullamcorper nunc neque, vitae ornare sem egestas sit amet. Nam ultrices mi in sem viverra fringilla. 
					Cras massa fercu, malesuada id viverra dapibus, bibendum eu justo. 
					Pellentesque ut lis, hendrerit id hendrerit at, egestas id magna. 
					Curabitur leo avelit orci. Etiam ultrices commodo bibendum. Sed dignissim dignissim pharetra. 
					Nam malesuada euismod diam.
					</h4>
					
				</div>

		</div>

			<hr className="breakline" />

			<div className="d-flex  justify-content-between">

				<div className="info">

				{store.sinchar.map((character,index) =>{
			return ( 
					<div className="row" key={index}>
						<div className="col-xl-12 wrappeople">
							<div className="col-xl-5">
			
						<h3>Name: {character.name}</h3>
						<h3>Birth Year</h3> <br /> <h6> Lorem ipsum </h6>
						<li>Height: {character.height}</li>
						<li>Weight: {character.mass}</li>
						<li>Birth year: {character.birth_year}</li>
						<li>Eye color: {character.eye_color}</li>
						<li>Gender: {character.gender}</li>
						<li>Hair Color: {character.hair_color}</li>
			

					</div>
						</div>
							</div> 
			)
		})}
					
				</div>
				<div className="info">
				<h3>Birth Year</h3> <br /> <h6> Lorem ipsum </h6>
				</div>

				<div className="info">
					<h3>Eye Color</h3> <br /> <h6> Lorem ipsum </h6>
				</div>
				<div className="info">
					<h3>Gender</h3> <br /> <h6> Lorem ipsum </h6>
				</div>
				<div className="info">
					<h3>Hair Color</h3> <br /> <h6> Lorem ipsum </h6>
				</div>
				<div className="info">
					<h3>Height</h3> <br /> <h6> Lorem ipsum </h6>
				</div>
			</div>
			<br />
		
            <Link to="/">
            <p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
                     Back home
                </p>
            </Link>
        
        </div>
		</div>

	);
};
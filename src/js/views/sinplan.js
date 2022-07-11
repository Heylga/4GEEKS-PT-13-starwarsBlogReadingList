import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const Sinplan = (props) => { 
	const { store, actions } = useContext(Context);
    const params = useParams();

	return (
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
					<h1 className="singleTitle">Planet Lorem ipsum  {props.name}</h1>
					<h4 className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Nam eget quam a nulla malesuada tincidunt sit amet eget eros. 
					Integer elementum porttitor enim. Maecenas suscipit metus a sem iaculis, in posuere ex hendrerit. 
					Aliquam sed rhoncus nunc, eu faucibus nisi. Fusce pulvinar finibus porttitor. 
					Praesent ullamcorper nunc neque, vitae ornare sem egestas sit amet. Nam ultrices mi in sem viverra fringilla. 
					Cras massa felis, hendrerit id hendrerit at, egestas id magna. 
					Curabitur leo arcu, malesuada id viverra dapibus, bibendum eu justo. 
					Pellentesque ut velit orci. Etiam ultrices commodo bibendum. Sed dignissim dignissim pharetra. 
					Nam malesuada euismod diam.
					</h4>
				</div>
			</div>
			<hr className="breakline" />
			<div className="d-flex  justify-content-between">
				<div className="info">
					<h3>Population</h3> <br /> <h6>  Lorem ipsum  {props.population}</h6>
				</div>
				<div className="info">
					<h3>Diameter</h3> <br /> <h6> Lorem ipsum  {props.diameter}</h6>
				</div>
				<div className="info">
					<h3>Terrain</h3> <br /> <h6> Lorem ipsum  {props.terrain}</h6>
				</div>
				<div className="info">
					<h3>Orbital Period</h3> <br /> <h6> Lorem ipsum  {props.orbital_period}</h6>
				</div>
			</div>
			<br />
		
            <Link to="/">
            <p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
                     Back home
                </p>
            </Link>
        
        </div>


	);
};

Sinplan.propTypes = {
	name: PropTypes.string,
	population:  PropTypes.string,
    terrain: PropTypes.string,
	orbital_period: PropTypes.string,
	diameter: PropTypes.string,
};
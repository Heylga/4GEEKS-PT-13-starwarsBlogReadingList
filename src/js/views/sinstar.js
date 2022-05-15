import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Sinstar = (props) => { 
	const { store, actions } = useContext(Context);
    const params = useParams();

	
	return (
		<div className="container">

			<div className="d-flex">
			<img
                        // src={
                        //   "https://starwars-visualguide.com/#/starships?page=1" + ".jpg"
                        // }
						src={
							"https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
						  }
                        className="card-img-top"
                        alt="Star Wars Starships"
                      />
				<div>
				<h1 className="singleTitle">Starship  {props.name}</h1>
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
					<h3>Model</h3> <br /> <h6> {props.model}</h6>
				</div>
				<div className="info">
					<h3>Vehicle Class</h3> <br /> <h6> {props.vehicle_class}</h6>
				</div>
				<div className="info">
					<h3>Cost in  credits</h3> <br /> <h6> {props.cost_in_credits} </h6>
				</div>
				<div className="info">
					<h3>Passengers</h3> <br /> <h6> {props.passengers} </h6>
				</div>
				<div className="info">
					<h3>Cargo Capacity</h3> <br /> <h6> {props.cargo_capacity}  </h6>
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

Sinstar.propTypes = {
	name: PropTypes.string,
	location: PropTypes.object,
	model: PropTypes.string,
	vehicle_class: PropTypes.string,
	cost_in_credits: PropTypes.string,
	passengers: PropTypes.string,
	cargo_capacity: PropTypes.string,
};
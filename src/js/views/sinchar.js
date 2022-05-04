import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Sinchar = () => { 
	const { store, actions } = useContext(Context);


    return (
		<div className="container">

			<div className="d-flex">
			<img
                        src={
                          "https://starwars-visualguide.com/#/characters?page=1" + ".jpg"
                        }
                        className="card-img-top"
                        alt="Star Wars Character"
                      />
				<div>
					<h1 className="singleTitle">Props Name</h1>
					<h4 className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam a nulla malesuada tincidunt sit amet eget eros. 
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
					<h3>Birth Year</h3> <br /> <h6>props birth year</h6>
				</div>
				<div className="info">
					<h3>Eye Color</h3> <br /> <h6>props eye color</h6>
				</div>
				<div className="info">
					<h3>Gender</h3> <br /> <h6> props gender</h6>
				</div>
				<div className="info">
					<h3>Hair Color</h3> <br /> <h6>props hair color</h6>
				</div>
				<div className="info">
					<h3>Height</h3> <br /> <h6>props height</h6>
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

Sinchar.propTypes = {
	
};

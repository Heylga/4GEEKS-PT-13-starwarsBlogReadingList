import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Sinplan = () => { 
	const { store, actions } = useContext(Context);
    const params = useParams();

	return (
		<div className="container">

			<div className="d-flex">
            <img
                        src={
                          "https://starwars-visualguide.com/#/planets?page=1" + ".jpg"
                        }
                        className="card-img-top"
                        alt="Star Wars Planets"
                      />

				<div>
					<h1 className="singleTitle">props name</h1>
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
					<h3>Population</h3> <br /> <h6>props Population</h6>
				</div>
				<div className="info">
					<h3>Diameter</h3> <br /> <h6>props Diameter</h6>
				</div>
				<div className="info">
					<h3>Terrain</h3> <br /> <h6>props Terrain</h6>
				</div>
				<div className="info">
					<h3>Orbital Period</h3> <br /> <h6>props Orbital Period</h6>
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
	
};
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import propTypes from "prop-types";


export const Sinchar = (props) => { 
	const { store, actions } = useContext(Context);
    return (
		<div className="container">

			<div className="d-flex">
			<img
                        // src={
                        //   "https://starwars-visualguide.com/#/characters?page=1" + ".jpg"
                        // }
                        src={
							"https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
						  }
                        className="card-img-top"
                        alt="Star Wars Character"
                      />
				<div>
					<h1 className="singleTitle">Name: Lorem ipsum  {store.name}</h1>
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
					<h3>Birth Year</h3> <br /> <h6> Lorem ipsum {store.birth_year}</h6>
				</div>
				<div className="info">
					<h3>Eye Color</h3> <br /> <h6> Lorem ipsum {store.eye_color}</h6>
				</div>
				<div className="info">
					<h3>Gender</h3> <br /> <h6> Lorem ipsum  {store.gender}</h6>
				</div>
				<div className="info">
					<h3>Hair Color</h3> <br /> <h6> Lorem ipsum {store.hair_color}</h6>
				</div>
				<div className="info">
					<h3>Height</h3> <br /> <h6> Lorem ipsum {store.height}</h6>
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
	name: propTypes.string,
	eye_color: propTypes.string,
	height: propTypes.string,
	hair_color: propTypes.string,
	birth_year:  propTypes.string,
	gender:  propTypes.string,
};

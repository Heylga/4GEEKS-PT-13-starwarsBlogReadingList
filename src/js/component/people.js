import React from "react";
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const People = (props) => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite]= useState ({});
    const {name}=useParams()

    
    return (

        <div className="container-card">
            <div className="card">
            <img
                        src={
                          "https://starwars-visualguide.com/assets/img/characters/" + props.id + ".jpg"
                        }
                        className="card-img-top"
                        alt="Star Wars Character"
                      />

 {/* <img src="https://cloudfour.com/wp-content/uploads/2020/01/default.svg" className="card-img-top" alt="Card" /> */}

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {props.descriptionOne}</p>
                <p className="card-text">Hair Color: {props.descriptionTwo}</p>
                <p className="card-text">Eye Color: {props.descriptionThree}</p>


                <div className="d-flex justify-content-between">
                    <Link to={"/sinchar/" + props.name}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>


                <button
                    id="heart"
                    className="btn"
                    onClick={() => {
                        actions.addFavorite(props.name);
                    }}
                >
                <a href="#" className="btn btn-primary">❤️</a>
                </button>   
                </div> 
                </div>
   </div>
   </div>

    );
}

People.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string,
    descriptionThree: PropTypes.string,
    id: PropTypes.number,
}
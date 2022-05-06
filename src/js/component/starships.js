import React from "react";
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Starships = (props) => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite]= useState ({});

    
    return (
        <div className="container-card">
            <div className="card">

            <img
                        src={
                          "https://starwars-visualguide.com/#/starships?page=1" + ".jpg"
                        }
                        className="card-img-top"
                        alt="Star Wars Starships"
                      />
                {/* <img src="https://cloudfour.com/wp-content/uploads/2020/01/default.svg" className="card-img-top" alt="Card" /> */}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <p className="card-text">Model: {props.model}</p>
                <p className="card-text">Manufacturer: {props.manufacturer}</p>


                <div className="d-flex justify-content-between">
                    <Link to="/sinstar">
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

Starships.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,

}
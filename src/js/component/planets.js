import React from "react";
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Planets = (props) => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite]= useState ({});


    
    return (
        <div className="container-card">
            <div className="card">

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

                {/* <img src="https://cloudfour.com/wp-content/uploads/2020/01/default.svg" className="card-img-top" alt="Card" /> */}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            
                <p className="card-text">Population: {props.population}</p>
                <p className="card-text">Terrain: {props.terrain}</p>
        
                <div className="d-flex justify-content-between">
                    <Link to={"/sinplan/" + props.name}>
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

Planets.propTypes = {
    name: PropTypes.string,
    population:  PropTypes.string,
    terrain:  PropTypes.string,
}
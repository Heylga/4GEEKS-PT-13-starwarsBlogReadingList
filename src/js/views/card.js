import React from "react";
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite]= useState ({});


    return (
        <div className="container-card">
            <div className="card">
                <img src="https://cloudfour.com/wp-content/uploads/2020/01/default.svg" className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {/* <p className="card-text">Gender: {props.descriptionOne}</p>
                <p className="card-text">Hair Color: {props.descriptionTwo}</p>
                <p className="card-text">Eye Color: {props.descriptionThree}</p>

                <p className="card-text">Population: {props.descriptionFour}</p>
                <p className="card-text">Terrain: {props.descriptionFive}</p>

                <p className="card-text">Model: {props.descriptionSix}</p>
                <p className="card-text">Manufacturer: {props.descriptionSeven}</p> */}


                <a href="#" className="btn btn-primary">learn more</a>

                <button
                    id="heart"
                    className="btn"
                    onClick={() => {
                        actions.addFavorite(props.name);
                    }}
                    onDoubleClick={() => {
                        actions.deleteFavorite(props.name);
                    }}
                >
                <a href="#" className="btn btn-primary">❤️</a>
                </button>   
                </div> 

   </div>
   </div>

    );
}

Card.propTypes = {
    name: PropTypes.string,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string,
    descriptionThree: PropTypes.string,
    descriptionFour: PropTypes.string,
    descriptionFive: PropTypes.string,
}
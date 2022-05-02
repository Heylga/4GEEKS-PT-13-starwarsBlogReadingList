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
        <div className="card">
        <img src="https://cloudfour.com/wp-content/uploads/2020/01/default.svg" className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.descriptionOne}</p>
                <p className="card-text">{props.descriptionTwo}</p>
                <p className="card-text">{props.descriptionThree}</p>


                <a href="#" className="btn btn-primary">learn more</a>

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

    );
}

Card.propTypes = {
    name: PropTypes.string,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string,
    descriptionThree: PropTypes.string,
}
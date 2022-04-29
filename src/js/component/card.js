import React from "react";
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = (props) => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
		actions.getOneCharacters()
	}, [])
    
    return (
        <div className="card">Hello
        <img src="" className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.url}</p>
                <a href="#" className="btn btn-primary">button</a>
                <a href="#" className="btn btn-primary">favorite</a>
            </div>
   </div>

    );
}

Card.propTypes = {
    uid: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
}
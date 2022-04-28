import react from 'react';
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        console.log("Hello Yoda")
    );
;
}
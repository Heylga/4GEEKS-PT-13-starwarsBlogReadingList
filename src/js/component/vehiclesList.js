import React from "react";
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = (props) => {
    const {store, actions} = useContext(Context);
    
    return (

//get info 

    //     <div className="container fluid d-flex justify-content-center">
    //     <div class="card" style="width: 18rem;">
    //             <img src="https://starwars-visualguide.com/#/vehicles/" class="card-img-top" alt="Vehicle" />

    //         <div class="card-body justify-content-center">
    //         <h4 className="card-tittle">{store.onePeople.model}</h4>
    //         <p className="card-text"> Birht Year: {store.onePeople.manufacturer}</p>
    //         <p className="card-text"> Birht Year: {store.onePeople.class}</p>
    //         <p className="card-text"> Birht Year: {store.onePeople.cost}</p>
    //         <p className="card-text">Gender: {store.onePeople.speed}</p>
    //         <p className="card-text">Height: {store.onePeople.Length}</p>
    //         <p className="card-text"> Hair Color: {store.onePeople.cargo_capacity}</p>
    //         <p className="card-text">Skin Color: {store.onePeople.mimimum_crew}</p>
    //         </div>

    //         <Link to="/">
	// 			<p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
	// 				Back to Main
	// 			</p>
	// 		</Link>

    //     </div>
    // </div>

    <div>Hello World</div>
    );
};
import react from 'react';
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <div className="container fluid d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
                <img src="https://starwars-visualguide.com/#/planets/" class="card-img-top" alt="Planet" />

            <div class="card-body justify-content-center">
            <h4 className="card-tittle">{store.onePeople.name}</h4>
            <p className="card-text"> Birht Year: {store.onePeople.population}</p>
            <p className="card-text"> Birht Year: {store.onePeople.rotation_period}</p>
            <p className="card-text"> Birht Year: {store.onePeople.orbital_period}</p>
            <p className="card-text"> Birht Year: {store.onePeople.diameter}</p>
            <p className="card-text">Gender: {store.onePeople.gravity}</p>
            <p className="card-text">Height: {store.onePeople.terrain}</p>
            <p className="card-text"> Hair Color: {store.onePeople.surface_water}</p>
            <p className="card-text">Skin Color: {store.onePeople.climate}</p>
            </div>

            <Link to="/">
				<p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
					Back to Main
				</p>
			</Link>

        </div>
    </div>
    );
};
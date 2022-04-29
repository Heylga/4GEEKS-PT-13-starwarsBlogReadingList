import react from 'react';
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
		actions.getOneCharacters()
	}, [])
    
    return (
        <div className="container fluid d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                    <img src="https://starwars-visualguide.com/#/characters/" class="card-img-top" alt="Character" />

                <div class="card-body justify-content-center">
                <h4 className="card-tittle">{store.onePeople.name}</h4>
                <p className="card-text"> Birht Year: {store.onePeople.birth_year}</p>
                <p className="card-text"> Birht Year: {store.onePeople.species}</p>
                <p className="card-text"> Birht Year: {store.onePeople.height}</p>
                <p className="card-text"> Birht Year: {store.onePeople.mass}</p>
				<p className="card-text">Gender: {store.onePeople.gender}</p>
				<p className="card-text">Height: {store.onePeople.homeworld}</p>
				<p className="card-text"> Hair Color: {store.onePeople.hair_color}</p>
				<p className="card-text">Skin Color: {store.onePeople.skin_color}</p>
                </div>


                <Link to="/">
				<p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
					Back to Main
				</p>
			</Link>
            
            </div>
        </div>

    );
}
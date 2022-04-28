import react from 'react';
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <div className="container fluid d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content.
                                </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
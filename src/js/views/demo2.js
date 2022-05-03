import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Demo2 = () => { 
	const { store, actions } = useContext(Context);
    const params = useParams();

	return (
		<div className="container">

            <Link to="/">
            <p className="btn btn-warning bg-warning btn-lg" href="#" role="button">
                     Back home
                </p>
            </Link>
        </div>


	);
};

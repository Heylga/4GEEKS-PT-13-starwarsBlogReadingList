import React from "react";
import Yoda from "../../img/yoda.jpg";
import "../../styles/home.css";
// import { Characters } from "./characters.js";
// import { Planets } from "./planets.js";
// import { Vehicles } from "./vehicles.js";


export const Home = () => (
	<div className="text-center mt-5">
		 <h1>Hello</h1>
		{/* <Characters />
		<Planets />
		<Vehicles /> */}
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> 
	</div>
);

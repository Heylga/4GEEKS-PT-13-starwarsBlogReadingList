import React from "react";
import Yoda from "../../img/yoda.jpg";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Yoda!</h1>
		<p>
			<img src={Yoda} />
		</p>

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);

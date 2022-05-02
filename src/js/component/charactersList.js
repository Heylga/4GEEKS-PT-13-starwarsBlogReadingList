import React from "react";
import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Card} from "../component/card.js"

export const CharactersList = () => {
    const {store, actions} = useContext(Context);



    const list = [
        {
          "uid": "1",
          "name": "Luke Skywalker",
          "url": "https://www.swapi.tech/api/people/1"
        },
        {
          "uid": "2",
          "name": "C-3PO",
          "url": "https://www.swapi.tech/api/people/2"
        },
        {
          "uid": "3",
          "name": "R2-D2",
          "url": "https://www.swapi.tech/api/people/3"
        },
        {
          "uid": "4",
          "name": "Darth Vader",
          "url": "https://www.swapi.tech/api/people/4"
        },
        {
          "uid": "5",
          "name": "Leia Organa",
          "url": "https://www.swapi.tech/api/people/5"
        },
        {
          "uid": "6",
          "name": "Owen Lars",
          "url": "https://www.swapi.tech/api/people/6"
        },
        {
          "uid": "7",
          "name": "Beru Whitesun lars",
          "url": "https://www.swapi.tech/api/people/7"
        },
        {
          "uid": "8",
          "name": "R5-D4",
          "url": "https://www.swapi.tech/api/people/8"
        },
        {
          "uid": "9",
          "name": "Biggs Darklighter",
          "url": "https://www.swapi.tech/api/people/9"
        },
        {
          "uid": "10",
          "name": "Obi-Wan Kenobi",
          "url": "https://www.swapi.tech/api/people/10"
        }
      ]

    const listofCharacters = list.map((Item, index) => {
        return(
            <div key={index}>
        <Card 
        uid={Item.uid}
        name={Item.name}
        url={Item.url}
        /> 
        </div>
        )
    });
    
    return (
        <div
			className="d-flex gap-2"
			style={{
				justifyContent: "space-between",
			}}>
			{" "}
			{listofCharacters}{" "}
		</div>

    );
}
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			oneCharacters: [],
			planets: [],
			onePlanets: [],
			vehicles: [],
			oneVehicles: [],
			updateFavourites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people/");
				const dataCharacters = await response.json();
				setStore ({ characters: dataCharacters.results }); 
			},
			getOneCharacters: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people/");
				const dataOneCharacters = await response.json();
				setStore ({ oneCharacters: dataOneCharacters.results.properties }); 
			},

			getPlanets: async () => {
				const response = await fetch ("https://www.swapi.tech/api/planets/");
				const dataPlanets = await response.json();
				setStore ({ planets: dataPlanets.results });
			},

			getOnePlanets: async () => {
				const response = await fetch ("https://www.swapi.tech/api/planets/");
				const dataOneCharacters = await response.json();
				setStore ({ oneCharacters: dataOnePlanets.results.properties }); 
			},

			getVehicles: async () => {
				const response = await fetch ("https://www.swapi.tech/api/vehicles/");
				const dataVehicles = await response.json();
				setStore ({ planets: dataVehicles.results });
			},

			getOneVehicles: async () => {
				const response = await fetch ("https://www.swapi.tech/api/vehicles/");
				const dataOneVehicles = await response.json();
				setStore ({ oneCharacters: dataOneVehicles.results.properties }); 
			}
		}
	};
};

export default getState;

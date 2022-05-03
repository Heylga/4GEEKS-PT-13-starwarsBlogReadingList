import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorite: [], 
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.error(error));

				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.error(error));

					fetch("https://swapi.dev/api/starships/")
					.then(response => response.json())
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.error(error));
			},
			
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			}
		}
	};
};

export default getState;
import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			sinchar: [],
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
			},


	
			getPeopleById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/people/` + uid
					).then(response => {
					if(response.ok){
					return response.json()
			}
				throw new Error ("Fail loading getPeopleByUid")
			}).then(responseAsjson=>{
				setStore({sinchar:[responseAsjson.result.properties]})
			}
			).catch(errorGetPeopleById => {
			console.error(errorGetPeopleById.message)
			})
			},


			getPlanetsById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/palnets/` + uid
					).then(response => {
					if(response.ok){
					return response.json()
				}
					throw new Error ("Fail loading getPlanetsById")
				}).then(responseAsjson=>{
					setStore({sinplan:[responseAsjson.result.properties]})
				}
				).catch(errorGetPlanetsById => {
				console.error(errorGetPlanetsById.message)
				})
			},


			getStarshipsById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/starships/` + uid
				).then(response => {
				if(response.ok){
					return response.json()
				}
				throw new Error ("Fail loading getStarshipsByUid")
				}).then(responseAsjson=>{
					setStore({sinchar:[responseAsjson.result.properties]})
				}
				).catch(errorGetStarshipsById => {
					console.error(errorGetStarshipsById.message)
				})
				},

}
};
};

export default getState;
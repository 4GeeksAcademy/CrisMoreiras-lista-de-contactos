const apiUrl = ["https://playground.4geeks.com/apis/fake/contact/agenda/Agenda Cris 02"]
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			demo: [
				{
					title: "FIRST 02",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND 02",
					background: "white",
					initial: "white"
				}
			],
			
			prueba: [
				{
					full_name: "CLAUDIA 03",
					email: "whiteEEE",
					id: 12345
				},
				{
					full_name: "LORENA 03",
					email: "whiteAAA",
					id: 6789
				}
			],

			contactlist: [],

		},

		actions: {
		
			loadSomeData: () => {
				fetch (apiUrl)
					.then((response) => response.json())
					.then((data) => {
						setStore({ contactlist: data });
					})
			},

			deleteContact: (id) => {
				const deleteOptions = {
					method: "DELETE",
					headers: { 'Content-Type': 'application/json'  },	
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, deleteOptions)
					.then(response => response.json())
					.then((data =>{ 
						fetch(apiUrl)
							.then((response) => response.json())
							.then((data) => {
								setStore({ contactlist: data });
							})
					}))
			},

		},

		

			
	}
};


export default getState;

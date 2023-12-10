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
			
			contactlist: [
				{
					full_name: "CLAUDIA 03",
					email: "whiteEEE"
				},
				{
					full_name: "LORENA 03",
					email: "whiteAAA"
				}
			],

		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

				setStore({ contactlist: [
					fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/Agenda Cris 02")
					.then((response) => response.json())
					.then((data) => setStore({ contactlist: data }))
				]

				});

			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

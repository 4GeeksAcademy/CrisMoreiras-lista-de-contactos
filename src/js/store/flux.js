//const apiUrl = ["https://playground.4geeks.com/apis/fake/contact/agenda/Agenda Cris 02"]
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
	
			contactlist: [],

		},

		actions: {
		
			loadSomeData: () => {
				fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/Agenda Cris 02")
					.then((response) => response.json())
					.then((data) => setStore ({contactlist: data}))	
			},

			
			addNewContact: (newContact) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"full_name": newContact.full_name,
						"email": newContact.email,
						"agenda_slug": "Agenda Cris 02",
						"address":newContact.address,
						"phone":newContact.phone,
					})
				};
				fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)
			},

			editContact: (editContact) => {
				const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"full_name": editContact.full_name,
						"email": editContact.email,
						"agenda_slug": "Agenda Cris 02",
						"address":editContact.address,
						"phone":editContact.phone,
					})
				};
				fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)
			},


			deleteContact: (indexToDelete) => {
				const store = getStore();

					var requestOptions = {
						method: "DELETE",
						redirect : "follow"
					};

					fetch ("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete, requestOptions)
					.then(response => response.text())
					.then(result => {
						
						fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/Agenda Cris 02")
						.then((response) => response.json())
						.then((data) => setStore ({contactlist: data}))

					})
					.catch (error => console.log("error", error));
			},

		},
		
	};
};


export default getState;

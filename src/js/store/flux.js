
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
	
			contactlist: [],

			contact: {},

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

			seeContact: (contact) => {
				console.log(contact);
				setStore({ contact: contact });
			  },

			editContact: (editContact, id) => {
				console.log(id)
				const editOptions = {
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
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, editOptions)
				.then(response => response.json())
				.then(data => {
					console.log("Edit Response:", data);
					//console.log(`Edited contact with id ${id}`);
					// Actualiza la lista de contactos después de la edición
					getActions().loadSomeData();
				})
				.catch(error => console.error("Error editing contact:", error));
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

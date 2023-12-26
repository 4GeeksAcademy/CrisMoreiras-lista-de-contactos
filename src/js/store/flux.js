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
			
			contactlist: [
				{
					full_name: "CLAUDIA 03",
					email: "whiteEEE",
					
				},
				{
					full_name: "LORENA 03",
					email: "whiteAAA",
					
				}
			],

			contactlist2: [],

		},

		actions: {
		
			loadSomeData: () => {
				fetch (apiUrl)
					.then((response) => response.json())
					.then((data) => {
						setStore({ contactlist: data });
					})
			},

			//addContact: (newContact) {
			//	const requestOptions = {
			//		method: 'POST',
			//		headers: { 'Content-Type': 'application/json' },
			//		body: JSON.stringify({
			//			"full_name": newContact.full_name,
			//			"email": newContact.email,
			//			"agenda_slug": "Agenda Cris 02",
			//			"address":newContact.address,
			//			"phone":newContact.phone,
			//		})
			//	};
			//	fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)
			//},

			deleteContact: (indexToDelete) => {
				const store = getStore();
				console.log ("deleteContact")
				console.log ("eliminado" + indexToDelete)
				console.log(store.contactlist.filter ((item, index) => index!= indexToDelete))
				setStore({contactlist:store.contactlist.filter ((item, index) => index!= indexToDelete)})
			},

			//deleteContact: (index) => {
			//	const deleteOptions = {
			//		method: "DELETE",	
			//	};
			//	fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, deleteOptions)
			//		.then(response => response.json())
			//		.then((data =>{ 
			//			fetch(apiUrl)
			//				.then((response) => response.json())
			//				.then((data) => {
			//					setStore({ contactlist: data });
			//				})
			//		}))
			//},

		},

		

			
	}
};


export default getState;

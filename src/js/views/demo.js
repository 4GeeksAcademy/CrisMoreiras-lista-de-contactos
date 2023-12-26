import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	
	const { store, actions } = useContext(Context);

	//useEffect(() => {
		//actions.loadSomeData();
	  //}, []);

	//const buttonDeleteContact = (index) => {
	//	actions.deleteContact(index);
	//};

	function eliminar (indexToDelete){
		console.log ("eliminado" + indexToDelete)
		console.log(store.contactlist.filter ((item, index) => index!= indexToDelete))
	}

	
	return (
		<div className="container">
			<ul className="list-group">
				{store.contactlist.map((contactlist, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
							{ contactlist.full_name }
							{ contactlist.email }
							<button onClick={()=>actions.deleteContact(index)}>Delete Contact</button>
						</li>
					);
				})}	
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			
		</div>

		
	);


	

};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	
	const { store, actions } = useContext(Context);


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
							{ contactlist.id }
							<button onClick={()=>actions.deleteContact(contactlist.id)}>Delete Contact</button>
						</li>
					);
				})}	
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<br/>
			<Link to="/formaddcontact">
				<button className="btn btn-primary">Add New Contact</button>
			</Link>
			<br/>
			<Link to="/contactlist">
				<button className="btn btn-primary">Contact</button>
			</Link>
			
		</div>
		
	);	

};

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
		<div className="container" >
			<ul className="list-group">
				{store.contactlist.map((contactlist, index) => {
					return (
						<div className="container_list">
						<li
							key={index}
							className="list-group-item d-flex"
							>
							<div>
								<img src="https://picsum.photos/90" class="img-thumbnail" alt="..."/>
							</div>
							<div className = "contact_data">	
								<h4>{ contactlist.full_name }</h4>
								<p>{ contactlist.address }</p>
								<p>{ contactlist.phone }</p>
								<p>{ contactlist.email }</p>
							</div>
							
							<div className="buttons_position">
								<Link to="/formedit">
								<button type="button" class="btn btn-success mx-1" onClick={()=>actions.editContact(contactlist.id)}>Edit</button>
								</Link>
								<button type="button" class="btn btn-danger" onClick={()=>actions.deleteContact(contactlist.id)}>Delete</button>
							</div>
						</li>
						</div>
					);
				})}	
			</ul>
			<br/>				
			<Link to="/formaddcontact">
				<button className="btn btn-primary">Add New Contact</button>
			</Link>
			<br/>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>	
	);	
};


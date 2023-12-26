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
		<div className="container_list" >
			<ul className="list-group">
				{store.contactlist.map((contactlist, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex"
							>
							<div>
								<img src="https://picsum.photos/90" class="img-thumbnail" alt="..."/>
							</div>
							<div>
								<div className = "contact_data">	
								<h4>{ contactlist.full_name }</h4>
								<p>{ contactlist.addres }</p>
								<p>{ contactlist.phone }</p>
								<p>{ contactlist.email }</p>
								</div>
							</div>
							<div className="buttons">
								<button onClick={()=>actions.deleteContact(contactlist.id)}>Delete Contact</button>
							</div>
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
		
			
		</div>
		
	);	

};


import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Demo = () => {
	
	const { store, actions } = useContext(Context);

	return (
		<div className="container" >
			<center><h2>My Contact List</h2></center>

			<Link to="/formaddcontact">
				<button className="btn btn-primary my-4">Add New Contact</button>
			</Link>

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
								<Link to={"/formedit/${contactlist.id}"} key={contactlist}>
								<button type="button" class="btn btn-success mx-3 btn-sm" onClick={()=>actions.editContact(contactlist.id)}>Edit</button>
								</Link>
								<button type="button" class="btn btn-danger btn-sm" onClick={()=>actions.deleteContact(contactlist.id)}>Delete</button>
							</div>
						</li>
						</div>
					);
				})}	
			</ul>
			<br/>				
			
			<br/>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>	
	);	
};


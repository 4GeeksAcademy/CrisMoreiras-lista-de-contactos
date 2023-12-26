import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
	
	const { store, actions } = useContext(Context);

    useEffect(() => {
		actions.loadSomeData();
	  }, []);

    function eliminar (indexToDelete){
		console.log ("eliminado" + indexToDelete)
		console.log(store.contactlist.filter ((item, index) => index!= indexToDelete))
	};

	
	return (
        
        <div className="container">
            {store.contactlist.map((contactlist, index) => {
				
                <div className="card mb-3" style="max-width: 540px;">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" key={index} >{contactlist.full_name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
				})}	

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<br></br>
			<Link to="/formaddcontact">
				<button className="btn btn-primary">Add New Contact</button>
			</Link>  

        </div> 
	);
};

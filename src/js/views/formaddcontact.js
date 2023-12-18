import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const FormAddContact = () => {

	console.log ("add contact form")
	
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

    const inputFullName = (eName) =>{
		setName(eName.target.value)
		
	};

	const inputEmail = (eMail) =>{
		setMail(eMail.target.value)
		
	};

	const inputPhone = (ePhone) =>{
		setPhone(ePhone.target.value)
		
	};

	const inputAddress = (eAddress) =>{
		setAddress(eAddress.target.value)
		
	};

		
	return (
        <>
        <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"></input>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Another label</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
</div>
        
        </>	
	);


	

};

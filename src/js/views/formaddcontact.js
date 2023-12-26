import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const FormAddContact = () => {

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

	const saveNewContact = () =>{
		actions.addNewContact({
			full_name: name,
			email: mail, 
			phone: phone,
			address: address,
			
	});
		setName("");
		setMail("");
		setPhone("");
		setAddress("");
	}

	
	return (
        <>

        <div className="mb-3">
  			<label for="formGroupExampleInput" className="form-label">Full Name</label>
  			<input type="text" className="form-control" onChange={inputFullName} value={name} placeholder="Enter Full Name"></input>
		</div>

		<div className="mb-3">
  			<label for="formGroupExampleInput2" className="form-label">Email</label>
  			<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email"></input>
		</div>

		<div className="col-12 mt-3">
            <button className="saveButton" style={{width:"90%"}} onClick={saveNewContact}>Save</button>
        </div>

		<div className="col-12 mt-3">
					<Link to="/demo">
                        <button className="saveButton">Return to Contacs</button>
                    </Link>
        </div>
        
        </>	
	);
};

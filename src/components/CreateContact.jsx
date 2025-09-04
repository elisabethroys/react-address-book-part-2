import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ContactContext } from "../App"

function CreateContact(){

    const {contact_api} = useContext(ContactContext);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newContact = {
            firstName,
            lastName,
            street,
            city
        };

        if(firstName !== '' && lastName !== ''){
            try {
                const response = await fetch(contact_api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newContact)
                });

                if (response.ok) {
                    navigate("/");
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <h1>Create Contact</h1>
            <nav>
                <Link to="/">Dashboard</Link>
            </nav>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" name="firstname" onChange={e => setFirstName(e.target.value)} value={firstName}></input>
                </div>
                <br></br>
                <div>
                    <label>Lastname: </label>
                    <input type="text" name="lastname" onChange={e => setlastName(e.target.value)} value={lastName}></input>
                </div>
                <br></br>
                <div>
                    <label>Street: </label>
                    <input type="text" name="street" onChange={e => setStreet(e.target.value)} value={street}></input>
                </div>
                <br></br>
                <div>
                    <label>City: </label>
                    <input type="text" name="city" onChange={e => setCity(e.target.value)} value={city}></input>
                </div>
                <br></br>
                <div>
                    <button type="submit">Create contact</button>
                </div>
            </form>
        </>
    )
}

export default CreateContact

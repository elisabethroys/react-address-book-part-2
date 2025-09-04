import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { ContactContext } from "../App"

function UpdateContact (){

    const { id } = useParams();
    const {contacts, contact_api} = useContext(ContactContext);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const clickedContact = contacts.find(c => String(c.id) === String(id));
            if (clickedContact) {
                setFirstName(clickedContact.firstName);
                setlastName(clickedContact.lastName);
                setStreet(clickedContact.street);
                setCity(clickedContact.city);
                setLoaded(true);
            }
        }
    }, [id, contacts, loaded]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const updateContact = {
            firstName,
            lastName,
            street,
            city
        };

        if(firstName !== '' && lastName !== ''){
            try {
                const response = await fetch(`${contact_api}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateContact)
                });

                if (response.ok) {
                    navigate(`/profile/${id}`);
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <h1>Update Contact</h1>
            <nav>
                <Link to={`/profile/${id}`}>Back to contact profile</Link>
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
                    <button type="submit">Update contact</button>
                </div>
            </form>
        </>
    )
}

export default UpdateContact

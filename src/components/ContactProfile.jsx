import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"

import { ContactContext } from "../App"

function ContactProfile (){

    const { contacts, contact_api } = useContext(ContactContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [contact, setContact] = useState(null);

    const editContact = async () => {
        navigate(`/profile/${contact.id}/edit`)
    };

    const deleteContact = async () => {

        try {
            const response = await fetch(`${contact_api}/${contact.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                navigate("/");
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const clickedContact = contacts.find(c => String(c.id) === String(id));
        
        if (clickedContact) {
            setContact(clickedContact);
        }

    },[id, contact, contacts]);

    return (
        <>
            <h1>Contact Profile</h1>
            <nav>
                <Link to="/">Dashboard</Link>
            </nav>
            {contact ? (
                <>
                    <h2 className="not-bold"><strong>Name:</strong> {contact.firstName} {contact.lastName}</h2>
                    <p><strong>Street:</strong> {contact.street}</p>
                    <p><strong>City:</strong> {contact.city}</p>
                    <button onClick={editContact}>Edit contact</button>
                    <button onClick={deleteContact}>Delete contact</button>
                </>
            ) : (
                <p>Not available</p>
            )}

        </>
    )
}

export default ContactProfile

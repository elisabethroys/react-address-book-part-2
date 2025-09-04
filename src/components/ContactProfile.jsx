import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from "react-router-dom"

import { ContactContext } from "../App"

function ContactProfile (){

    const { contacts } = useContext(ContactContext);

    const { id } = useParams();
    const [contact, setContact] = useState(null);

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
                </>
            ) : (
                <p>Not available</p>
            )}

        </>
    )
}

export default ContactProfile

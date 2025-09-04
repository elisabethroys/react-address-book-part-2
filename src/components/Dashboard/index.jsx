import { useContext } from 'react'
import { ContactContext } from "../../App"

function Dashboard () {

    const { contacts } = useContext(ContactContext);

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <h3>
                            {contact.firstName} {contact.lastName}
                        </h3>
                    </li>
                        
                ))}
            </ul>
        </>
    )
}

export default Dashboard

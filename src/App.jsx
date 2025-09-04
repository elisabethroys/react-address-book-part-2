import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import './App.css';
import ContactProfile from './components/ContactProfile';
import CreateContact from './components/CreateContact';

export const ContactContext = createContext();

function App() {

    const [contacts, setContacts] = useState([]);

    const contact_api = "https://boolean-uk-api-server.fly.dev/elisabethroys/contact"

    useEffect(() =>
    {
        const fetchContacts = async () => {
            const response = await fetch(contact_api);
            const data = await response.json();
            setContacts(data);
        }

        fetchContacts();
    }, []);

    return (
        <main>
            <ContactContext.Provider value={{contacts}}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile/:id" element={<ContactProfile />}/>
                    <Route path="/create-contact" element={<CreateContact />}/>
                </Routes>
            </ContactContext.Provider>
        </main>
    );
}

export default App;

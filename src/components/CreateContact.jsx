import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateContact(){

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(null);
    const [lastName, setlastName] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/");
    };



    return (
        <>
            <h1>Create Contact</h1>
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

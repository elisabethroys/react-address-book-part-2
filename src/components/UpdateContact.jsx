import { useParams, Link } from 'react-router-dom'

function UpdateContact (){

    const { id } = useParams();

    return (
        <>
            <h1>Update Contact</h1>
            <nav>
                <Link to={`/profile/${id}`}>Back to contact profile</Link>
            </nav>
        </>
    )
}

export default UpdateContact

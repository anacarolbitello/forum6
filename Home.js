import { useNavigate } from "react-router-dom"

function Home(){

    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
        <>
            <button onClick={handleLogout}>Logar</button>
           HOME
        </>
    )
}

export default Home


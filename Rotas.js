import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "../pagina/Login/Login";
import Home from "../pagina/Home/Home";
import SignupPage from "../pagina/SignupPage/SignupPage";

function Rotas(props){
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>} />
                    <Route path="signupPage" element={<SignupPage/>}/>
                   
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default Rotas
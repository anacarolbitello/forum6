import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from "../pagina/Login/Login";
import Home from "../pagina/Home/Home";

function Rotas(){
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route path="home" element={<Home/>}/>
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default Rotas
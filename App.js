import './App.css';
import Rotas from "./rotas/Rotas";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyled";
import { GlobalState } from "./GlobalState/GlobalState";

function App(){
  const [news, setNews] = useState([])

  return(
    <>
      <Rotas new={news} setNews={setNews}/>
      
      <GlobalStyle />

      <GlobalState>
        <Rotas />
      </GlobalState>
    </>
  )
}

export default App;

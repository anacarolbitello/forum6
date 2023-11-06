import { ContainerNav } from "./styles";
import filtro from "../../assets/assets/classe-social.jpg";
import Botao from "Botao/Botao";



function Nav(){
    return(
        <ContainerNav>
            <Botao titulo={"Fórum"}/>
            <Botao titulo={"Quem somos"}/>
            <Botao titulo={"Login"}/>
            <Botao titulo={"Cadastrar"}/>
            <img src={filtro}/>
            
        </ContainerNav>

    )
}

export default Nav
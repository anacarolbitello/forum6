
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";

import { SectionStyle } from "./styles";



function Home() {

  
    return (
        <>
            <HeaderPerfil />

            <SectionStyle>
                <Menu />
                <Card />
                {/* <Historicos /> */}

            </SectionStyle>

        </>
    )
}


export default Home
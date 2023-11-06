import { useNavigate } from 'react-router-dom'

import { ButtonLogin, ButtonRegister, HeaderStyle } from './style'


function Header() {
    const navigate = useNavigate()
    return (
        <HeaderStyle>
            <img src={logo} alt='logo alem help' />
            <div>
                <ButtonRegister onClick={()=>{navigate('/cadastrar')}}>Cadastro</ButtonRegister>
                <ButtonLogin onClick={()=>{navigate('/login')}}>Login</ButtonLogin>
            </div>
        </HeaderStyle>
    )
}

export default Header
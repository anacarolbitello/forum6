import {useState} from 'react';
import './App.css';
import background from "./assets/classe-social.jpg";
import Cadastrar from './pagina/Cadastrar/Cadastrar';

//const initialState = {email: 'alessandrarostberti@gmail.com', senha:'girassol'};

function App(props) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const {target} = e;
    const {email, value} = target;
    console.log('*** handleInputChange', email, value);
    setFormValues({...formValues, [email]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);

  };

  console.log('*** formValues', formValues);

  return (
    <div class="d-flex mb-3" style={{backgroundImage: `url(${background})`}}>
      <h1 margin="10px">Login</h1>
      <form class="center-form" onSubmit={handleSubmit}>
        <label for="exampleInputEmail1"  id="exampleInputEmail" class="form-label fs-1">E-mail:</label>
        <input type="text-center" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email}></input>
        <label for="exampleInputSenha" id="exampleInputSenha" class="form-label fs-1">Senha:</label>
        <input type="text-center" name="senha" placeholder="senha" onChange={handleInputChange} value={formValues.senha}></input>
        <p>Ainda não tem conta? Criar conta.</p>
        <button type='submit'>Entrar</button>
        
      </form>
      
    </div>
  );
}

export default App;

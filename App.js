import {useState} from 'react';
import './App.css';

//const initialState = {email: 'alessandrarostberti@gmail.com', senha:'girassol'};

function App() {
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
    <>
      <h1>Login</h1>
      <form class="center-form" onSubmit={handleSubmit}>
      <label for="exampleInputEmail1" class="form-label">E-mail:</label>
      <input type="text-center" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email}></input>
        <label for="exampleInputSenha" class="form-label">Senha:</label>
        <input type="text-center" name="senha" placeholder="senha" onChange={handleInputChange} value={formValues.senha}></input>
        <button type="submit">Próximo</button>
      </form>
      
    </>
  );
}

export default App;

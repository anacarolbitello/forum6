import {useState}  from "react";
import {useForm} from "../../Hooks/useForm.js";



export const useForm = (estadoInicial) =>{

    const [form, setForm] = useState(estadoInicial)

    const onChangeForm = (event) =>{
      const {value, name} = event.target
      
      const novoForm = {
        ...form,
        [name]:value
      }

      setForm(novoForm)
    }

    return[form, onChangeForm]
}
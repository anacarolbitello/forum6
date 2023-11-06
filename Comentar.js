import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = ({postId, comments, autorId}) => {

    const [novoComentario, setNovoComentario] = useState('')
    const [comentarios, setNovoComentarios] = useState([])
    const [mostrarComentarios, setMostrarComentarios] = useState(false)

    const adicionarComentarios = ()=>{
        if(novoComentario.trim() !==''){
            createComment(postId, novoComentario)
            setNovoComentarios(...comments, novoComentario)
            setNovoComentario('')
        }
    }

    useEffect(()=>{
        adicionarComentarios()
    },[])

    const novosComentarios = comments.map((comentario)=>{
        return(<ComentarioContainer key={comentario.comment_id}>
                <AutorComentario>{comentarios.creator_name}:</AutorComentario>
                <ComentarioDoAutor>{comentarios.comment}</ComentarioDoAutor>
            </ComentarioContainer>

        )
    })

    return (

        <>
            <ContainerItem>
                <BotaoCondicional onClick={()=> setMostrarComentarios
                    (!mostrarComentarios)}>
                        {mostrarComentarios ? ('Fechar') : ('Comentar')}
                </BotaoCondicional>
                {mostrarComentarios && (
                    <ContainerCurtir>
                        <div>
                            <InputComentar 
                                placeholder="comentario"
                                value={novoComentario}
                                onChange={(e)=>setNovoComentario(e.target.value)}
                            />
                                <button onClick={adicionarComentario}>Enviar</button>
                        </div>
                        {novosComentarios}
                    </ContainerCurtir>
                )}
            </ContainerItem>

         
             

            
        </>
    )
}

export default Comentar
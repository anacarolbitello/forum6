import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

  const [loading, setLoading] = useState(true)
  const [forumTopics, setForumTopics] = useState([])
  const [selectedPostId] = useContext(GlobalStateContect)

  console.log(selectedPostId)

  useEffect(()=>{
    getPostAll(setForumTopics)
  },[])
 
  return (
    <>
      {selectedPostId ? (
        forumTopics.filter((titulo)=>{
          titulo.post_title.toLowerCase()
          .includes(selectedPostId.toLowerCase())
          .map((item)=>{
            <div key={item.post_id}>
                <CardStyle>
                  <ImgCard src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F04%2F60%2F11%2F54%2F1000_F_460115463_mfNuBGBNeTfq9bBBUgGC9BSdVLgCGwtq.jpg&tbnid=fUl6p83CQP2L0M&vet=12ahUKEwjmt77dgKOCAxWepJUCHR5yAvoQMygBegQIARBP..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fbr%2Fimages%2Fonline-forum-concept-tiny-people-communication-in-community-group-internet-chat-messages-dialog-conversation-in-social-media-networking-modern-flat-cartoon-style-vector-illustration%2F460115463&docid=q817Z7l39qqedM&w=1000&h=688&q=imagens%20de%20forum%20online&ved=2ahUKEwjmt77dgKOCAxWepJUCHR5yAvoQMygBegQIARBP'/>
                  <NomeCard>{item.creator_username}</NomeCard>
                  <MensagemCard>{item.post_created_at}</MensagemCard>

                  <TituloCard>{item.post_title}</TituloCard>
                  <ImgPost src={item.post_image} alt='foto post'/>

                  <CardPost>
                    <ConteudoCard>{item.post_content}</ConteudoCard>
                    
                  </CardPost>
                </CardStyle>
            </div>
          })
        })
      ):(<ContainerCardHome>
          {loading ? (
            <ContainerCard>
              {forumTopics && forumTopics.map(dado =>(
                <CardStyle key={dado.post_id}>
                    <PerfilUsuario>
                      <ImgCard src='' alt='foto de perfil'/>
                      <ContainerPerfil>
                        <NomeCard>{dado.creator_username}</NomeCard>
                        <MensagemCard>{dado.post_created_at}</MensagemCard>
                      </ContainerPerfil>
                    </PerfilUsuario>
                    <TituloCard>{dado.post_title}</TituloCard>
                    <CardPost>
                      <ImgPost src={dado.post_image} alt='foto post'/>
                      <ConteudoCard>{dado.post_content}</ConteudoCard>
                    </CardPost>

                    <EditPost>
                      <Comentar
                        postId={dado.post_id}
                        comments={dado.comments}
                        autorId={dado.creator_id}
                      />
                    </EditPost>
                </CardStyle>
              ))}</ContainerCard>):
              (<p>Loading...</p>)}
        </ContainerCardHome>
      ) }
   


    </>
  )
}

export default Card
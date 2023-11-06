import { BASE_URL } from "../constants/url"
import axios from "axios"
import { response } from "express"


const token = localStorage.getItem('Token')

export const getPostAll = (salvarPost)=>{
    axios.get(`${BASE_URL}/post`)
    .then((response)=>{
        salvarPost(response.data)
    })
    .catch((error)=>{console.log(err.response)})
}

export const createComment = (postId, comment)=>{
    const body = {
        'postId': postId,
        'comment': comment
    }

    axios.post(`${BASE_URL}/comments/create`, body,{header{Authorrization:
    token}}) 
    
    .then((response)=>{
            getPostAll()
        })
        .catch((error)=>{
            console.error("Erro ao criar comentario", error)
        })
}
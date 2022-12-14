import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import './Post.css'

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await imovelfetch.get(`/Casas/${id}`)
      await imovelfetch.get(`/Apartamentos/${id}`)
      await imovelfetch.get(`/Lancamentos/${id}`);;
      

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.tipo ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{casas.id}</h2>
            <h2>{casas.tipo}</h2>
            <img width="250px" height="250px" src={casas.imagem}/>
         <p>{casas.quartos}</p> 
            <p>{casas.suite}</p>
            <p>{casas.tamanho}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

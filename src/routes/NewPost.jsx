import imovelfetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState();
  const [quarto, setQuarto] = useState();
  const [suite, setSuite] = useState();
  const [tamanho, setTamanho] = useState();
  const [imagem, setImagem] = useState();
  

  const createPost = async (e) => {
    e.preventDefault();

    const post = { tipo, quarto, suite, tamanho, imagem };

    await imovelfetch.post("/Casas",  {
     id: post,
    })

    navigate("/");
    await imovelfetch.post("/Apartamentos",  {
      id: post,
    })

    navigate("/");
    await imovelfetch.post("/Lançamentos",  {
      id: post,
    })

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Tipo de Residência:</label>
          <input
            placeholder="Digite o tipo de Residência..."
            onChange={(e) => setTipo(e.target.value)}
          />
 {/* tipo de residencia */}
           
          <label htmlFor="title">Quantidade de Quartos:</label>
          <textarea
           
            placeholder="Digite a quantidade de quartos..."
            onChange={(e) => setQuarto(e.target.value)}
          ></textarea>
{/* quartos */}
          <label htmlFor="title">Suites:</label>
          <textarea
          
            placeholder="A residência possui suíte?..."
            onChange={(e) => setSuite(e.target.value)}
          ></textarea>
{/* suites */}

          <label htmlFor="title">Tamanho por M²:</label>
          <textarea
           
            placeholder="Diga quantos M² a residência tem..."
            onChange={(e) => setTamanho(e.target.value)}
          ></textarea>
{/* taamnho */}
          <label htmlFor="title">Imagem:</label>
          <textarea
            placeholder="Faça o upload da imagem..."
            onChange={(e) => setImagem(e.target.value)}
          ></textarea>
{/* imagem */}
        </div>
        <input type="submit" value="Inserir Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;


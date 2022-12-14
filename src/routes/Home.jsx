import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import Carrosel from "../components/Carrosel"


const Home = () => {
  const [casas, setCasas] = useState([]);

  const getCasas = async () => {
    try {
      const response = await imovelfetch.get("/Casas");

      const data = response.data;

      setCasas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCasas();
  }, []);

  return (
    <div className="home">
      <Carrosel/>

      <h1>Casas</h1>
      {casas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        casas.map((casas) => (
          <div className="post" key={casas.id}>
            <h2>{casas.id}</h2>
            <h2>{casas.tipo}</h2>
            <img width="250px" height="250px" src={casas.imagem}/>
            <p>{casas.quartos}</p> 
            <p>{casas.suite}</p>
            <p>{casas.tamanho}</p>
            <Link className="btn" to={`/comentarios`}>
              Comentários
            </Link>
          </div>
        ))
      )}
    </div>
  );

};

export default Home

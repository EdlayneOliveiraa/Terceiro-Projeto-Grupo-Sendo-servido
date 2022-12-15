import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

import Menu from "../components/Menu"

import Carrosel from "../components/Carrosel"

import Button from 'react-bootstrap/Button';


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
     <Menu />
     <br />
     <br />
      <Carrosel/>

      <h1 className="casa">Casas</h1>
      {casas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        casas.map((casas) => (
          
          <div className="post" key={casas.id}>
            <div className="container">
            <img src={casas.imagem}/>
            
            <h4 className="animate__animated animate__lightSpeedInRight">{casas.tipo}</h4>
            <h4 className="animate__animated animate__lightSpeedInRight">{casas.quartos}</h4>
            <h4 className="animate__animated animate__lightSpeedInRight">{casas.suite}</h4>
            <h4 className="animate__animated animate__lightSpeedInRight">{casas.tamanho}</h4>
            
            <Link className="btn-btn" to={`/NewPost`}>
              Inserir Post
            </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default Home

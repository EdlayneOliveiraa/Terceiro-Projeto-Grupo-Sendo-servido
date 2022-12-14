import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Carrosel from "../components/Carrosel";

import "./Home.css";



//Lançamentos//
const Lançamentos = () => {
    const [lançamentos, setLançamentos] = useState([]);
    
      const getLançamentos = async () => {
        try {
          const response = await imovelfetch.get("/Lancamentos");
    
          const data = response.data;
    
          setLançamentos(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getLançamentos();
      }, []);
    
      return (
        <div className="home">
          <Carrosel/>
          <h1 className="casa">Lançamentos</h1>
          {lançamentos.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            lançamentos.map((lançamentos) => (
              <div className="post" key={lançamentos.id}>
                <div className="container">
                <img width="250px" height="250px" src={lançamentos.imagem}/>
                <h4 className="animate__animated animate__lightSpeedInRight">{lançamentos.id}</h4>
                <h4 className="animate__animated animate__lightSpeedInRight">{lançamentos.regiao}</h4>
                <h4 className="animate__animated animate__lightSpeedInRight">{lançamentos.bairro}</h4> 
                <h4 className="animate__animated animate__lightSpeedInRight">{lançamentos.tamanho}</h4>
                <Link className="btn-btn" to={`/NewPost`}>
              Inserir Post
            </Link>
                </div>
              </div>
            ))
          )}
        </div>
      );
            }
            export default Lançamentos

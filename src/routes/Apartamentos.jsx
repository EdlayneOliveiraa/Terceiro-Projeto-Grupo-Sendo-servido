import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Menu from "../components/Menu"

import Carrosel from "../components/Carrosel";

import "./Home.css";



//Apartamentos//
const Ape = () => {
    const [apartamentos, setApartamentos] = useState([]);
    
      const getApartamentos = async () => {
        try {
          const response = await imovelfetch.get("/Apartamentos");
    
          const data = response.data;
    
          setApartamentos(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getApartamentos();
      }, []);
    
      return (
        <div className="home">
         <Menu />
           <br />
           <br />
          <Carrosel/>
          <h1 className="casa">Apartamentos</h1>
          {apartamentos.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            apartamentos.map((apartamentos) => (
              <div className="post" key={apartamentos.id}>
                <div className="container">
                <img width="250px" height="250px" src={apartamentos.imagem}/>
                <h4 className="animate__animated animate__lightSpeedInRight">{apartamentos.id}</h4>
                <h4 className="animate__animated animate__lightSpeedInRight">{apartamentos.tipo}</h4>
                <h4 className="animate__animated animate__lightSpeedInRight">{apartamentos.quartos}</h4> 
                <h4 className="animate__animated animate__lightSpeedInRight">{apartamentos.suite}</h4>
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
            export default Ape

import {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import aux1 from "../assets/foto.jpg";
import s from "../assets/banner.module.css";

export default function Banner() {
  const[more,setMore]= useState(false)

  return (
    <section className={s.banner}>
      <Container>
        <Row>
          <Col xs={12} md={8} xl={9} className="m-auto">
            <h1>
              {`Aldo Gaspar`} </h1>
              <br />     
            <h2> {"Web Developer"}</h2>  
              <br />
           
            <p> Hola...</p> 
            <p> Soy nuevo en este mundo del desarrollo web,
               comencé mi formación la bootcamp de Henry, donde forje bases solidas tanto en el back-end como en el front-end,
               comence con algunos pequeños ejecicios de JavaScript
               , donde me llamo la atencion que no me resulto tedioso o sacrificado sin molestarme todo el tiempo que necesite invertir para estar conforme con los pequeños logros alcanzados. </p>
               <button onClick={()=>setMore(!more)}className={s.more}>
              About me
              </button>   
             {more?(    <div>
            <p> Por cierto si, el sujeto de la foto, mi comienzo no fue facil por que no tengo ningun estudio previo IT, lo que contrario a lo parece no fue un limitante
               sino una motivacion para poder estar a nivel de mis compañeros, lo que dio lugar a varias noches intentando resolver ejercicios
               en forma individual y con ayuda de compañeros, y sentir que empezaba a avanzar.  </p>
            <p> Por el momento me considero un desarrollador web junior, con conocimientos de Front-end y Back-end,
              sin ninguna preferencia al respecto, creo que eso se dara con el tiempo.
            </p></div>
              ):null}
          </Col>
          <Col xs={12} md={4} xl={3}>
            <div className={s.perfil}>
            <img src={aux1} alt="perfil" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import aux1 from "../assets/foto.jpg";
import s from "../assets/banner.module.css";
import Nav from "react-bootstrap/Nav";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  const text = "Web Developer";
  const[more,setMore]= useState(false)

  return (
    <section className={s.banner}>
      <Container>
        <Row>
          <Col xs={12} md={8} xl={9}>
            <h1>
              {`I'm Aldo Gaspar`}
              <br />
              <span className={s.wrap}>{text}</span>
            </h1>
            <p> Hola...</p> 
            <p> Soy nuevo en este mundo del desarrollo web,
               comencé mi formación como desarrollador en el bootcamp de Henry,
               donde empece sin saber nada al respecto, pero desde que comence con algunos pequeños ejecicios de JavaScript
               comence me cuestione por que me entretenia tanto sin molestarme el tiempo invertido. </p>
               <button onClick={()=>setMore(!more)}className={s.more}>
              About me
              </button>   
             {more?(    <div>
            <p> Obviamente no fue facil al inicio, y realmente fueron varias noches intentando resolver ejercicios
               en forma individual y con ayuda de compañeros, y sentir que empezaba a avanzar.  </p>
            <p> Por el momento me considero un desarrollador web junior, con conocimientos de Front-end y Back-end,
              sin ninguna preferencia al respecto, creo que eso se dara con el tiempo.
            </p></div>
              ):null}
            <Nav.Link href="#contact">
              <button>
                Contact me
                <FaArrowRight size={25} />
              </button>
            </Nav.Link>
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

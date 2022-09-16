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
          <Col xs={12} md={8} xl={9} className="order-1 order-sm-0">
            <h1>
              {`Aldo Gaspar`} </h1>
              <br />     
            <h2> {"Web Developer"}</h2>  
              <br />
           
            <p> Hi...</p> 
            <p>I am new in this world of web development, I started my training in the SoyHenry bootcamp, where I forged solid foundations in both back-end and front-end, orienting myself in the latter.
Where after long hours invested, I'm happy with the small achievements, which started with some small JavaScript exercises, and took shape with the development of projects that can be seen in this portfolio.</p>
               <button onClick={()=>setMore(!more)}className={s.more}>
              About me
              </button>   
             {more?( <div className="mb-2">
            <p>By the way yes, I am the subject of the photo, my beginning was not easy because I have no previous IT study, which contrary to what it seems was not a limiting factor, but a motivation to be able to be at the level of my classmates.
 but a motivation to be at the level of my classmates, which resulted in several nights trying to solve exercises individually and with the help of colleagues, and feel that little by little the theory began to take shape.  </p>
            <p> At the moment, I consider myself a junior web developer, with Front-end and Back-end knowledge, but with the clear goal of where to invest my professional development.
            </p></div>
              ):null}
          </Col>
          <Col xs={12} md={4} xl={3} className="order-0 order-sm-1">
            <div className={s.perfil}>
            <img src={aux1} alt="perfil" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

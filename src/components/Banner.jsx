import {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import aux1 from "../assets/foto.jpg";
import s from "../assets/banner.module.css";
import {infobanner, moreAbout} from "../constantes/infobanner"

export default function Banner() {
  const[more,setMore]= useState(false)

  return (
    <section className={s.banner}>
      <Container>
        <Row>
          <Col xs={12} md={8} xl={9} className="order-1 order-sm-0">
            <h1>{`Aldo Gaspar`} </h1>
              <br />     
            <h2> {"Web Developer"}</h2>  
              <br />
            <p> Hi...</p> 
            <p> {infobanner}</p>
               <button onClick={()=>setMore(!more)}className={s.more}>
              About me
              </button>   
             {more?( 
             <div className="mb-3">
              {moreAbout.map( e=> {return <p>{e}</p>}
              )}
            </div>
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

import React from "react";
import Carousel from "react-multi-carousel";
import { useParams,useNavigate} from "react-router-dom";
import {Container,Row, Col } from "react-bootstrap";
import s from "../assets/Details.module.css";
import { projects} from "../constantes/data";

export default function Details( ) {
  const { id } = useParams();
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let det = projects.find((e) => e.title.trim() === id);
  const handleReturn = () => {
    navigate('/');
}
  return (
    <div className={s.containerDetail}>
      <div className={s.title}>{det.title}</div>
      <Container>
      <Row className="mt-5">   
          <Col xs={10} md={5} xl={4}className="m-auto">
                <img 
                    src={det.imgUrl}
                    alt="foto"
                    className="img"
                />
            </Col>

            <Col xs={10}md={6} xl={7} className="m-auto">
                <h3> FEATURES </h3>
                <ul className="list-group">
                    <li className="list-group-item text-start bg-transparent text-reset"><b> Summary: </b> <p className={s.txt}>{det.sumary}</p></li>
                    <li className="list-group-item text-start bg-transparent text-reset"><b> Tech: </b> <p className={s.txt}>{new Intl.ListFormat('en').format(det.tech)+ "."}</p></li>
                    <li className="list-group-item text-start bg-transparent text-reset" > <b> Site: </b> 
                    <a href={det.Url} target="_blank" rel="noopener noreferrer">{det.Url}</a></li>
                    <li className="list-group-item text-start bg-transparent text-reset" > <b> Code: </b> 
                    <a href={det.source} target="_blank" rel="noopener noreferrer">{det.source}</a></li>
                </ul>

            </Col>
</Row>
</Container>
<div   className={s.containerslider}>
      <h1> Photos</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        className={s.skillslider}
      >
        {
        det.fotos.map(e => {
          return (
            <div className={s.item} key={e.id}>
              <img src={e.nameimg} alt="foto"/>
              <h5>{e.title}</h5>
            </div>
          );
        })
      }
      </Carousel>
</div>
      <button className="btn btn-outline-light mb-5" onClick={ handleReturn}> Return</button>
    </div>
  );
}

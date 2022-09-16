import React from "react";
import Carousel from "react-multi-carousel";
import { useParams,useNavigate} from "react-router-dom";
import s from "../assets/Details.module.css";
import { projects} from "../constantes.js";

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
    navigate('/home');
}
  return (
    <div className={s.containerDetail}>
      <div className="text-center display-1 fw-bold pt-4">{det.title}</div>
      <div className="row mt-5">   
          <div className="col-4 m-auto">
                <img 
                    src={det.imgUrl}
                    alt="foto"
                    className="img"
                />
            </div>

            <div className="col-7 m-auto">
                <h3> FEATURES </h3>
                <ul className="list-group">
                    <li className="list-group-item text-start bg-transparent text-reset"><b> Summary: </b>{det.sumary}</li>
                    <li className="list-group-item text-start bg-transparent text-reset" > <b> Site: </b> 
                    <a href={det.Url} target="_blank" rel="noopener noreferrer">{det.Url}</a></li>
                </ul>

            </div>
</div>

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

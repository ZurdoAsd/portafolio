import React from "react";
import "react-multi-carousel/lib/styles.css";
import s from "../assets/skills.module.css";
import {SoftSkills} from "../constantes/SoftSkills"
import {cvURL} from "../constantes/cvurl"
import {frontend, backend} from "../constantes/skills"

export default function Skills() {
   return (
    <section className={s.skill} id="skills">
      <div className="container">
            <h2>Skills</h2>
            <h3>  Me again...<br></br>
            how to get started🤔?,
              <br></br> among my skills I believe I can
              stand out: </h3>

              <div className={s.stick}>
            <h3> Some of my soft skills like:</h3>
            {SoftSkills.map( (e) =>{
              return( 
              <div key={e.id}>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                <br />
                </div>
              )
            }
            )}
            </div>

              <div className={s.stick}>
              <h3> Some of my technical skills like:</h3>
              <br />
              <p>- Front-end: </p>
              <div className={s.stick2}>
                {frontend?.map(e=> {return <img src= {e} alt=""/>})}
              </div>
              <br />
              <p>- Back-end: </p>
              <div className={s.stick2}>
              {backend?.map(e=> {return <img src= {e} alt=""/>})}
              </div> 
              <br />
            <p>You can also check my cv {"   "}
              <a href={cvURL} target="_blank"rel="noopener noreferrer"className="text-decoration-none">  here</a>
            </p>
        </div>
      </div>
    </section>
  );
}

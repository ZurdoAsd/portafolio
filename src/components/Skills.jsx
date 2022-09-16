import React from "react";
import "react-multi-carousel/lib/styles.css";
import s from "../assets/skills.module.css";
import {SoftSkills} from "../constantes"

export default function Skills() {
  const detUrl =
    "https://drive.google.com/file/d/1Ny6zh0x-3-aPjepGttmg1GA0tB0k0geV/view?usp=sharing";
  return (
    <section className={s.skill} id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Skills</h2>
            <h3>  Me again...<br></br>
            how to get started🤔?,
              <br></br> among my skills I believe I can
              stand out:
  </h3>
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
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/redux.png"
                alt=""
              />

              <img
                src="https://img.icons8.com/color/48/000000/material-ui.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt=""
              />
              </div>
              <br />
              <p>- Back-end: </p>

              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/express.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/postgresql.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/typescript.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt=""
              />
              <img
                src="https://s2.qwant.com/thumbr/0x380/f/1/def6e5a6cedacd5856251aeaef7e52119bf19a4f70ada987080f4a3db8e074/sequelize-logo-png-transparent.png?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fsequelize-logo-png-transparent.png&q=0&b=1&p=0&a=0"
                alt=""
              />
            <p>You can also check my cv {"   "}
              <a
                href={detUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                here
              </a>
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

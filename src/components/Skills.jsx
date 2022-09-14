import React from "react";
import "react-multi-carousel/lib/styles.css";
import s from "../assets/skills.module.css";

export default function Skills() {
  const detUrl =
    "https://drive.google.com/file/d/1Ny6zh0x-3-aPjepGttmg1GA0tB0k0geV/view?usp=sharing";
  return (
    <section className={s.skill} id="skills">
      <div className={s.container}>
        <div className="row">
          <div className="col-12">
            <h2>Skills</h2>
            <h3>
              Yo de nuevo...<br></br>
              como empezar con esto 🤔,
              <br></br> dentro de mis habilidades creo poder
              destacar:{" "}
  </h3>
              <div className={s.stick}>
          
            <h3> Algunas de mis habilidades blandas como:</h3>
            <p> -Comunicacion</p>
            <p> 
            Considero vital este aspecto, 
            pues comunicarse en forma clara permite generar un gran ambiente de trabajo,
             asi como percibir un mensaje en forma correcta ayuda a generar empatia y abre la posibilidad de mayor participation. </p>
            <br />
            <p>-Resolver problemas,</p>
            <p> 
           No quiero sonar soberbio,
           pero me considero como alguien que puede dar un aporte, tras analizar la situacion en forma globalization,
           sea tanto al momento de trabajar en equipo como al momento de desarrollar proyectos.
           Esto sea que importe investigar sobre un tema especifico o buscar como lograr que la interaccion con los demas logre ser fluida.
           </p><br />
            <p> -Investigar antes de preguntar</p>
            <p> 
            Esto no lo considero una habildad en si misma, sino que forma parte de mi formacion autodidacta,
            ya que voy a requerir ayuda de alguien, es necesario realizar un esfuerzo previo,
            pues el tiempo prestado por los demas es valioso, y el provecho que le puedo sacar va a ser mayor si las
            dudas que comparto surgen luego de haberlo intentado.  
            </p><br />
            </div>

   <div className={s.stick}>
              <h3> Algunas de mis habilidades técnicas como:</h3>

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
            </div>
            <p>
            You can also check my cv {"   "}
              <a
                href={detUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none ml-4"
              >
                here
              </a>
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

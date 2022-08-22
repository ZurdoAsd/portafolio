import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card  from "./Card";
 import projpokeload from "../assets/pokeapi/landingpoke.jpeg";
 import projclub from "../assets/CLub/landingclub.jpeg";

import s from "../assets/projects.module.css"

export default function Projects() {

  const projects = [
    {
      title: "Poke-app",
      description: "Design & Development",
      imgUrl: projpokeload,
      Url:"https://club-henry.vercel.app"
    },
    {
      title: "Club Deportivo",
      description: "Design & Development",
      imgUrl: projclub,
      Url:"https://poke-app-19.vercel.app/"
      
    },

  ];
  const projectsGrup = [
    {
      title: "Club Deportivo",
      description: "Design & Development",
      imgUrl: projclub,
      Url:"https://club-henry.vercel.app"
    },

  ];

  return (
    <section className={s.project} id="project">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>A traves de esta seccion del portafolio intentare ir subiendo diversos proyectos 
                  que vayan surguiendo segun mi aprendizaje, asi espero que no sean exigentes
                   con los primeros. </p>
                <p>Tambien saber mas sobre el proyecto al seleccionar sobre ellos</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                   variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center" 
                    id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">individual projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">group projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {  projects.map((project, index) => {
                            return (<Card key={index}{...project} /> )})
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {projectsGrup.map((project, index) => {
                            return (<Card key={index} {...project} />) }) }
                         </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
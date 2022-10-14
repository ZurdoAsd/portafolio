import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card  from "./Card";
import{projects} from "../constantes/data";
 import { NavLink } from "react-router-dom";
import s from "../assets/projects.module.css"

export default function Projects() {

  const single = projects.filter(e=> e.type==="single");
  const group = projects.filter(e=> e.type!=="single")
  

  return (
    <section className={s.project} id="project">
      <Container>
        <Row>
          <Col size={12} className="mx-auto">
                <h2>Projects</h2>
                <p>Through this section, I will try to upload various projects that arise according to my learning, so I hope you like them: </p>
                <p>To learn more about the project by clicking on them:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="cero">
                  <Nav   
                  className="mb-5 mt-5 mr-5 justify-content-center align-items-center text-dark fw-bold" 
                  >
                 <Nav.Item>
                           <Nav.Link eventKey="cero" className={s.mod}>All</Nav.Link></Nav.Item>
                    <Nav.Item >
                      <Nav.Link eventKey="first"className={s.mod}>Individual</Nav.Link></Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className={s.mod}>Group</Nav.Link></Nav.Item>
                    
                     
                  </Nav>
                  
                  <Tab.Content>
                  <Tab.Pane eventKey="cero">
                      <Row >
                        {projects.map((e) => {
                            return (<NavLink to={"/"+ e.title}key={e.id}> 
                            <Card  imgUrl={e.imgUrl} title={e.title} description={e.description} /> </NavLink>)})
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {single.map((e) => {
                            return (<NavLink to={"/"+ e.title}key={e.id}> 
                            <Card  imgUrl={e.imgUrl} id={e.id} title={e.title} description={e.description} /> </NavLink>)})
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {group.map((e) => {
                            return (
                              <NavLink to={"/"+ e.title}key={e.id}> 
                              <Card imgUrl={e.imgUrl} id={e.id}title={e.title} description={e.description} imgs={e.imgs}  /> </NavLink>)}) }
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
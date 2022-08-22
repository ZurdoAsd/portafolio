import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/aux2.jpg";
import s from "../assets/footer.module.css"
import Nav from 'react-bootstrap/Nav';
import {
  FaArrowUp,
  FaInstagram,
  FaGithub,
  FaCopyright,
  FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={s.footer}>
        
      <Container>
        <Row >
         
        <Nav.Link href="#home"><button className={s.arriba}>
         <FaArrowUp/>
        </button></Nav.Link>
          <Col size={6} sm={6} className={s.blockimg}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={20} sm={6} className={s.blockimgright}>
            <div className={s.socialIcon}>
              <a href="https://www.linkedin.com/in/aldo-gaspar" target="_blank"rel="noopener noreferrer">
                <FaLinkedin/>
                </a>
              <a href="https://github.com/ZurdoAsd" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
              </a>
              <a href="https://www.instagram.com/dr.al.do" target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
              </a>
            </div> 
          </Col>
             <p><FaCopyright/>Copyright 2022. All Rights Reserved</p> 
        </Row>
      </Container>
    </footer>
  )
}
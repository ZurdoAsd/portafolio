import React from 'react';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills.jsx';
import Project from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
import Contact from '../components/Contact.jsx';
import Banner from '../components/Banner.jsx'

export default function home() {
  return (
    <> 
    <Navbar/>
    <Banner/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

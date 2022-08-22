import React from 'react'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import aux from '../assets/aux2.jpg'

import s from "../assets/skills.module.css"

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={s.skill} id="skills">
        <div className={s.container}>
            <div className="row">
                <div className="col-12">
                        <h2>Skills</h2>
                        <p>hola soy Aldo<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        {/* <Carousel responsive={responsive} infinite={true}
                         className={s.skillslider}>
                            <div className={s.item}>
                                 <img src={aux} alt="" /> 
                                <h5>Web Development</h5>
                            </div>
                            <div className={s.item}>
                                 <img src={aux} alt="" /> 
                                <h5>Brand Identity</h5>
                            </div>
                            <div className={s.item}>
                                 <img src={aux} alt="" /> 
                                <h5>Logo Design</h5>
                            </div>
                            <div className={s.item}>
                                 <img src={aux} alt="" /> 
                                <h5>Web Development</h5>
                           </div> 
                        </Carousel> */}
                        <div className ={s.stick}>
                        Algunas de mis habilidades técnicas como:
    <br />
- Desarrollador de Front-end: 
 <img src="https://img.icons8.com/color/48/000000/javascript.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/react-native.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/redux.png"alt=""/>

 <img src="https://img.icons8.com/color/48/000000/material-ui.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/bootstrap.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/html-5.png" alt=""/>
<img src="https://img.icons8.com/color/48/000000/css3.png"alt=""/>
<br />

- Desarrollador de Back-end:   
<img src="https://img.icons8.com/color/48/000000/nodejs.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/express.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/postgresql.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/typescript.png"alt=""/>
<img src="https://img.icons8.com/color/48/000000/mongodb.png"alt=""/>
<img src="https://s2.qwant.com/thumbr/0x380/f/1/def6e5a6cedacd5856251aeaef7e52119bf19a4f70ada987080f4a3db8e074/sequelize-logo-png-transparent.png?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fsequelize-logo-png-transparent.png&q=0&b=1&p=0&a=0"alt=""/>

</div>
                </div>
            </div>
        </div>
           </section>
  )
}
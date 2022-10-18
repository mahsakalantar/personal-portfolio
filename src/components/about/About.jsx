import React from 'react'
import './about.css'
import Imgabout from '../../mahsa.jpg';
import Info from './Info'
import CV from '../../assets/Mahsa Kalantar.pdf'

function About() {
  return (
    <section className="about" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={Imgabout} className="img_about"/>
            <div className="about__data">
                <Info />
                <p className="about_description">
                Frontend developer,I create web and mobile pages with UI/UX user interface.
                I love learning updatest technologies and good at researching. 
            </p>
            <a href={CV} className="button button--flex">Download CV</a>
            </div>
            

        </div>
    </section>
  )
}

export default About
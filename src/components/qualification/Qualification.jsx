import React from 'react'
import './qualification.css'
import { useState } from 'react';

const Qualification = () => {
    const [ToggleState,SetToggleState]= useState('false');
const toggleTab = ()=>{
    SetToggleState(!ToggleState);
};
  return (
   
    <section className="qualifiction section">
             <h3 className="section__title">Qualification</h3>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualifiction__container container ">
           
            <div className="qualifiction__tabs">
            <div className={ToggleState ? "qualifiction__button qualifiction__active button--flex" :"qualifiction__button button--flex"}  onClick={toggleTab}>
                <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                Education
            </div>
            <div className={ToggleState ? "qualifiction__button  button--flex" :"qualifiction__button button--flex qualifiction__active"}  onClick={toggleTab}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                Experience
                </div>

                </div>
                <div className="qualifiction__sections">
                <div className={ToggleState ? " qualifiction__content-active" :" qualifiction__content"}>
                <div className="qualifiction__data">
                    {/* <div></div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div> */}
                    <div>
                        <h3 className="qualification__title">Bachelor of Applied mathematics</h3>
                    <span className="qualification__subtitle">Khajeh Nasir Toosi - university</span>
                         <div className="qualification__calendar">
                             <i className="uil uil-calendar-alt"></i>2016 - 2021
                         </div>

                    </div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    </div>
                    {/* <div className="qualifiction__data">
                               <div></div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Bachelor of Applied mathematics</h3>
                    <span className="qualification__subtitle">Khajeh Nasir Toosi - university</span>
                         <div className="qualification__calendar">
                             <i className="uil uil-calendar-alt"></i>2016 - 2021 
                         </div>

                    </div>
                   
                    </div> */}
                   
            
                
                </div>
                <div className={ToggleState ? "qualifiction__content " :" qualifiction__content-active"}>
                <div className="qualifiction__data">
                    {/* <div></div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div> */}
                    <div>
                        <h3 className="qualification__title">Programmer</h3>
                    <span className="qualification__subtitle">TradeMonster - Freelancer</span>
                         <div className="qualification__calendar">
                             <i className="uil uil-calendar-alt"></i>Feb 2021 - Aug 2021
                         </div>

                    </div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    </div>
                    <div className="qualifiction__data">
                               <div></div>
                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Frontend developer</h3>
                    <span className="qualification__subtitle">Digianet group - Startup</span>
                         <div className="qualification__calendar">
                             <i className="uil uil-calendar-alt"></i>2021 - Present
                         </div>

                    </div>
                   
                    </div>
                   
                 
                
                </div>
                </div>
                </div>
    </section>



  )
}

export default Qualification
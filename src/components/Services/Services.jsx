import React, { useState } from 'react'
import './services.css'
const Services =()=> {
//  modal activ
const [ToggleState,SetToggleState]=useState(0);
const toggleTab = (index)=>{
    SetToggleState(index);
};

return ( 
      <section className="section.services" id='services'>
            <h3 className="section__title">Services</h3>
        <span className="section__subtitle">What I offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                      <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
                </div>
              <span className="services__button" onClick={()=>toggleTab(1)}>View More
                  <i className="uil uil-arrow-right services__button-icon"></i>
              </span>
              <h3 className={toggleTab === 1 ? "services__modal active-modal" : "services__modal"}>
                  <div className="services__modal-content">
                      <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                      <h3 className="services__modal-title">Product</h3>
                      <p className="services__modal-description"></p>
                      <ul className="services__modal-services grid">
                          <li className="services__modal-service">
                              <i className='uil uil-check-circle services__modal-icon'></i>
                              <p className="services__modal-info">I develop ...</p>
                            

                          </li>
                          <li className="services__modal-service">
                              <i className='uil uil-check-circle services__modal-icon'></i>
                              <p className="services__modal-info">I develop ...</p>
                            

                          </li>
                          
                      </ul>
                  </div>
              </h3>
            </div>
        </div>

      </section>

    
  )
}

export default Services

import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import './contact.css'
const Cantact = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
  return (
    <section className="contact section" id='contact'>
    <h3 className="section__title">Contact me</h3>
<span className="section__subtitle">Get in touch</span>
 <div className="contact__container container grid">
     <div className="contact__content">
         <h3 className="contact__title">Talk to me</h3>
         <div className="contact__info">
             <div className="contact__card">
                 <i className='bx bxl-mail-send contact__card-icon'></i>
                 <h3 className="contact__card-title">Email</h3>
                 <span className='contact__card-data'>mahsa.k1998@gmail.com</span>
                 <a href="mailto:mahsa.k1998@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

             </div>
             <div className="contact__card">
                 <i className='bx bxl-whatsapp contact__card-icon'></i>
                 <h3 className="contact__card-title">Whatsapp</h3>
                 <span className='contact__card-data'>0930*******</span>
                 <a href="https:api.whatsapp.com/" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

             </div>
             <div className="contact__card">
                 <i className='bx bxl-messenger contact__card-icon'></i>
                 <h3 className="contact__card-title">Messenger</h3>
                 <span className='contact__card-data'></span>
                 <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

             </div>
         </div>
     </div>
     <div className="contact__content">
         <h3 className="contact__title">write me your project</h3>
         <form 
        //  ref={form} onSubmit={sendEmail} 
         className="contact__form">
             <div className="contact__form-div">
                 <label className='contact__form-tag'>Name</label>
                 <input type="text" name='name' className='contact__form-input' placeholder='insert your name' />

             </div>
             <div className="contact__form-div">
                 <label className='contact__form-tag'>Mail</label>
                 <input type="email" name='email' className='contact__form-input' placeholder='insert your email' />

             </div>
             <div className="contact__form-div contact__form-are">
                 <label className='contact__form-tag'>Project</label>
                <textarea name="project" id="" className='contact__form-input' placeholder='write your project' cols="30" rows="10"></textarea>
             </div>
             <a href="#contact" className="button button--flex">Send Message</a>
         </form>
     </div>
 </div>
</section>
  )
}

export default Cantact
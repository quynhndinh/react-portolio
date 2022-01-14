import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_2e1sawo', 'template_x7bivk5', e.target, 'user_IQwg0XqpoEfqz0H2dVODC')
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className='contact component__space' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='contact__text align__item__center'>Contact Me</h1>
                            <p className='contact__text white'>Want to ask me some questions about my work?</p>
                            <p className='contact__text white'>Contact me via email <strong>quynhndinh96@gmail.com</strong></p>
                            <div className='input__box'>
                                <form className='row' onSubmit={sendEmail}>
                                <input type='text' className='contact name' placeholder='Your name *' name='name'/>
                                <input type='email' className='contact email' placeholder='Your email *' name='email'/>
                                <input type='text' className='contact subject' placeholder='Write a subject *' name='subject'/>
                                <textarea name='message' id='message' placeholder='Write your message *'name='message'></textarea>
                                <button className='btn contact pointer teal' type='submit' value='Send'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import './Contact.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import web from './../../assets/io.png'
const Contact = () => {
    return (
        <div className='section-container'>
           
            <div className='social-icons-container'> 


                 <a href='mailto:girijaisent@gmail.com' className='social-icon mail'>
                    <img src={web} alt='social' height='55' />
                </a>
                 <a
                    href='https://linkedin.com/in/jayasundar-sr-5466051b2'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a href='https://github.com/theboys4' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
               
               
               
               
            </div>

           

            
        </div>
    );
};

export default Contact;

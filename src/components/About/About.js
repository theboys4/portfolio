import React from 'react';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        
        <div className='section-container'>
           
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Hello , I'm Jayasundar</h3>
                    <p className='about-details'>
                        I'm currently pursuing my undergraduation in Information Technology from Panimalar Institute of Technology{' '}
                        
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Education</h3>
                    <p className='about-details'>
                        Panimalar Institute of Technology    2018-2022  
                                       </p>

                       <p className='about-details'> Naahar Public School                      2016-2018
                       
                    </p>

                    {/* Sub section 3 */}
                   
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

           
            {/* Vector Frame! */}
          
        </div>
       
    );
};

export default About;

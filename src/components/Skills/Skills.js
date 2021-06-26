import React from 'react';
import './Skills.css';

import web from './../../assets/html.png'
import web1 from './../../assets/css.png'
import web2 from './../../assets/js.png'
import web3 from './../../assets/py.png'
import web4 from './../../assets/django.png'
import web5 from './../../assets/react.png'

const Skills = () => {
	return (
		<div className='cont'>
		<div className='heads'>Skills</div>
		<div className='cont1'>  
			
		     <div className='cart'>
		     	
		     	<img src={web} alt='none'/>
		     	<h3>HTML</h3>
		     </div>

		     <div className='cart'>
		     	
		     	<img  src={web1} alt='none'/>
		     			     	<h3>CSS</h3>

		     </div> 
		     <div className='cart'>
		     	
		     	<img  src={web2} alt='none'/>
		     			     	<h3>JavaScript</h3>

		     </div><div className='cart'>
		     	
		     	<img className='im' src={web3} alt='none'/>
		     			     	<h3>Python</h3>

		     </div>
		     <div className='cart'>
		     	
		     	<img className='im' src={web4} alt='none'/>
		     			     	<h3>Django</h3>

		     </div>
		     <div className='cart'>
		     	
		     	<img  src={web5} alt='none'/>
		     			     	<h3>React</h3>

		     </div>
		     
		</div></div>
		);
};


export default Skills;
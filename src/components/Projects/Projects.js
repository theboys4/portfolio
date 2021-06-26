import React from 'react';
import './Projects.css';

import web from './../../assets/m.gif'
import web1 from './../../assets/k.gif'
const Projects = () => {
	return (
		<div className='container'>
		<div className='head'>Projects</div>
		<div className='container1'>  
			
		     <div className='card'>
		     	
		     	<img src={web} alt='none'/>
		     	<center><h2>Student Mangement System</h2></center> 
		     	<h3>Made using django - python framework to maintain the students</h3>
		     </div>

		     <div className='card'>
		     	
		     	<img src={web1} alt='none'/>
		     	<center><h2>Subtitle Convertor</h2></center>
		     			     	<h3>Made using Python to Convert a Subtitle into any language</h3>

		     </div>
		     
		</div></div>
		);
};


export default Projects;
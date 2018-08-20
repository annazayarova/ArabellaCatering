import React from 'react';
import {NavLink} from 'react-router-dom';

import Flor from './Flor'
const Footer = (props) => (

    
     <footer>
    
    <div className='container-fluid'>
  <div className='row'>
  
     <div className='col-md-3 offset-md-1'  >
    <h4>Navigate</h4>
     <ul className="menu-footer">
      <li ><NavLink exact to="/">Home</NavLink></li>
          <li ><NavLink to="/about">About us</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>

          <li><NavLink to="/testimonials">Testimonials</NavLink></li>

      <li><NavLink to="/contact">Contact</NavLink></li>
      
    </ul>
    </div>
         <div className=' col-md-4'  >
 
    <Flor />
         
    <ul className="phone-footer">
         <li>+41 79 954 23 20</li>
                 <li><a href="mailto:contact@cateringdiarabella.com">contact@cateringdiarabella.com</a></li>
    <li>© 2018 Catering di Arabella</li>
              </ul>
    
        </div>
         <div className='col-md-3 '  >
 
    <h4 className="right">Follow us</h4>
    
  <div className='icons'>  
    <a href=""><svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
						</svg></a>
    
    <a href='https://www.instagram.com/cateringdiarabella/' target='_blank'><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
						</svg></a>
    
    </div>
    
    
     <ul className="credits">
    <li>Branding & Photography: <a href="http://cookeryphoto.com"  target="_blank">cookeryphoto.com</a></li>
   
    <li>Website design & build: <a href="http://annazayarova.com"  target="_blank">annazayarova.com</a></li>

</ul>
    
    </div></div></div>
       
    </footer>

    

);

export default Footer;
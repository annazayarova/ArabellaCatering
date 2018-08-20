import React from 'react';

import {NavLink} from 'react-router-dom';


import s1 from '../img/s1.jpg';
import s4 from '../img/s4.jpg';
import e2 from '../img/gallery/usi/e2-th.jpg';
import s6 from '../img/gallery/usi/e0.jpg';

  import ScrollToTopOnMount from './ScrollToTopOnMount';
import { Textfit } from 'react-textfit';

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
 
   import { translate, Trans } from 'react-i18next';


class Home extends React.Component {
   
  render() {
  
  

    const bg_home = {
  
    backgroundImage: `url(${s1})`,
     backgroundColor: 'rgba(48,58,78,.1)',
    backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
            
  position: 'absolute',
left:'35px', bottom:'35px', right:'35px', top:'120px'}  
  
const bg_services_home = {
   
    backgroundImage: `url(${s6})`,
    backgroundSize: 'cover',
  backgroundPosition: 'top center'
    
};
    
    
 const { t, i18n } = this.props;

   

    return (
       

    <div className="main-content ">

               
                     <ScrollToTopOnMount/>


                    <Reveal effect="width">
<div className="bg-white"></div>
        </Reveal>


       <div className="home">
        
        <div className="bg_home" style={bg_home}></div>

        <div className='text' >
      
    <h1><Fade right cascade delay={300}>                
 { this.props.t('home.text1') }
</Fade></h1>
    <h1 className="spacing"><Fade right cascade delay={400}> { this.props.t('home.text2') }</Fade></h1>
    <p><Fade right cascade  delay={500}> 
        { this.props.t('home.text3') }</Fade></p>
          
       
      </div>  
      
   </div>


    
        <div className="next">
        
               
     <div className="container-fluid ">
         <div className="row ">

  <div className="col-md-4 offset-md-1">
    
  
  <Fade bottom cascade delay={0}><p className="b">
      { this.props.t('home.text4') }
          </p>
        <p className="c">{ this.props.t('home.text5') }</p> </Fade>   
         <p className="welcome1">
    <Trans i18nKey='home.text6'>
   Dove gastronomia e fantasia si fondono e confondono con amore, passione, professionalità e molto charme
       </Trans></p>  

   
       
        
<NavLink className="link1" to="/about">About us</NavLink>
   
   </div> 

    
  <div className="col-md-6 offset-md-1 bottom1">
                    <Reveal effect="Slide">
<div className="bg-dark-1"></div>
        </Reveal>
    <div className="row no-gutters" >
    <div className="col-md-7 offset-md-0 col-10 offset-1" >
                <Reveal effect="fadeInUp" >
 <img src={s4} alt='catering di arabella'/>
        </Reveal>
        </div>
        
        <div className="col-md-5 offset-md-0 col-8 offset-2 voila"></div>    
        </div>    </div>
    
     <div className="col-md-6">
                            <Reveal effect="Slide">
<div className="bg-dark-2"></div>
        </Reveal>
        <div className="row no-gutters"><div className="col-md-10 offset-md-2 col-10 offset-1">
        
       <Reveal effect="fadeInUp" >
    <img src={e2} alt='catering di arabella'/>
        </Reveal>
    </div>  </div>  </div>
    
    
     <div className="col-md-5 offset-md-1">
    
    <ul className="getintouch"> 
    <li>+41 79 954 23 20</li>
     <li><a href="mailto:contact@cateringdiarabella.com">contact@cateringdiarabella.com</a></li></ul>
    
<NavLink className="link1" to="/contact">Get in touch</NavLink>
    
    </div>
    
    
  </div>  </div></div>  
    
   

        
        <div className='line'>
    <p className="line_inside">  <Textfit mode="single"> <Fade left big cascade>
             { this.props.t('home.text7') } 
</Fade></Textfit></p>
</div>
        


 
 
    
            <div className="next">
 <div className="container-fluid ">
         <div className="row ">
         <div className="col-md-10"> 
  <div className='bg_services_home' style={bg_services_home}></div>
        <div className="services-home">
    <Fade left cascade > <h2>Services</h2></Fade>
                  <p> { this.props.t('home.text8') }<br>
                      </br>{ this.props.t('home.text8a') }</p>
   <NavLink className="link2" to="/services"><Fade left cascade >Learn more</Fade></NavLink>
              </div> 
   
   
</div>  
    </div>  </div>  
     
 </div> 
    
    
     <div className="home-testem">
   <Fade top cascade delay={200}> <h2>Testimonials</h2></Fade>
    
 <div className="container-fluid ">
         <div className="row ">
  
     <div className="col-md-6 offset-md-3">
     <div className="cosa">
<h7 >
     <Textfit mode="single"> <Fade left cascade>
             { this.props.t('home.text9') }
 </Fade></Textfit>
</h7></div>
   <div className="bq">
   

<div className="blockquote"><p><span>"</span>Für den Einweihungsevent unserer neuen Zweigniederlassung hat uns Arabella das Catering übernommen. Alle unsere Gäste und Mitarbeiter waren begeistert von der optischen Präsentation wie auch der Qualität des der Speisen und Getränke. Ein grosses Lob an Arabella, es war einfach grosse Klasse – Danke<span>"</span></p>

 <div className='foot'><h1>Georg Ulmschneider, <span>CEO</span></h1>     <div className="company">SecuSuisse AG</div></div>
    </div>
  </div>
    
    
    </div>
           </div> </div>  
     <NavLink className="link3" to="/testimonials">Show more</NavLink></div>    
    
    
    


    </div>    


 

        
    );
  }}



export default translate("common")(Home);


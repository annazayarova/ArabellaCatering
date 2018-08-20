import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import ScrollToTopOnMount from './ScrollToTopOnMount';

import Textservices from './Textservices';
import s6 from '../img/s6.jpg';
import h23 from '../img/home/h23.jpg';
import h19 from '../img/home/h19.jpg';
import cat from '../img/cateringdiarabella_2.jpg';


import Swiper from 'react-id-swiper';

import { Parallax } from 'react-parallax';
import {NavLink} from 'react-router-dom';


import h16 from '../img/home/h16.jpg';
import s11 from '../img/s11.jpg';
import seal from '../img/seal.svg';

import ImageZoom from 'react-medium-image-zoom';
import Zoom from './Zoom';

   import { translate, Trans } from 'react-i18next';

      
const bg_serv = {
       backgroundColor: 'rgba(48,58,78,.1)',

backgroundImage: `url(${h23})`,
    backgroundSize: 'cover',
  backgroundPosition: 'top center',
    position: 'absolute',
left:'35px', bottom:'35px',  top:'120px', right:'35px'}  
  

 
class Services extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      items: [
          
             {id: 1,  
         img:s6,
          
    },
           {id: 2,  
         img:h23,
           
    },
            {id: 3,  
         img:h19,
           
    }
          
          
           ]
    }
  }
   render() { 
       const { t, i18n } = this.props;

        const params = {
           mousewheel: false,
    speed:1000,
      spaceBetween: 0,
      centeredSlides: true,  
     autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },   
loop:true,
            pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
      },
     effect:'fade'
        
    }


  
  return (   
<div className="main-content">
              <ScrollToTopOnMount/>


<Textservices />
 <Reveal effect="width">
<div className="bg-white"></div>
        </Reveal>
  
<div className="serv ">
      
<div style={bg_serv}></div>

     
   <h6><Fade bottom cascade delay={100}>Services</Fade></h6>
      </div>   
         <div className='next'>

     <div className='container-fluid '>
  <div className="row">
 
       <div className="col-md-6 ">
     <Reveal effect="Slide">
<div className="bg-dark-3"></div>
        </Reveal>
      
<ul className="list">
   <Fade bottom cascade>   <h2>Catering</h2></Fade>
     <Fade bottom cascade> 
   
                  <li><span>{ this.props.t('services.text1a') }</span></li>
                  <li><span>{ this.props.t('services.text1b') }</span></li>
                  <li><span>{ this.props.t('services.text1c') }</span></li>
                  <li><span>{ this.props.t('services.text1d') }</span></li>
                  <li><span>{ this.props.t('services.text1e') }</span></li>
                  <li><span>{ this.props.t('services.text1f') }</span></li>
                      <li><span>{ this.props.t('services.text1g') }</span></li>

                    <li><span>{ this.props.t('services.text1h') }</span></li>
    
    <li><span>{ this.props.t('services.text1i') }</span></li>
       </Fade>
                </ul>    


 </div>
    <div className="col-md-6">
   
     <div className="paragraph">
     <Fade bottom cascade >
    <p>{ this.props.t('services.text2a')}</p>
    <p>{ this.props.t('services.text2b')}</p>
    <p>{ this.props.t('services.text2c')}</p>
    <p>{ this.props.t('services.text2d')}</p>
        </Fade>
    

    </div> 

</div>
     
    
         </div></div>


    <div className='container-fluid bottom'>
  <div className="row"> 
   
      <div className="col-md-5 offset-md-1">
    
    <ul className="getintouch"> 
    <li>Tell us about your next event </li>
    </ul>
    
    <NavLink className="link1" to="/contact">Book now</NavLink>

    </div>
    
    
    
            <div className=" col-md-6 offset-md-0 offset-1 col-10">
 <Reveal effect="fadeInUp"> 
<Swiper {...params}>            
  {this.state.items.map( item =>
 <div key={item.id} > 
 <img src={item.img} />
</div>)}
</Swiper>    </Reveal></div>
    
    
       </div>       </div>
  
    
    
        <div className='container-fluid bottom'>
  <div className="row ">
   
      
     <div className="col-md-12">
<Parallax
    
      bgImage={require('../img/home/h25.jpg')}
      bgImageAlt="catering di arabella"
      strength={200}
    >
      <div style={{ height: '700px' }}>
          <div className='gallery gallery1'>
                <Fade left cascade>
                <div className='gallery-title'>CANNELLONI IN VERTICALE</div>

<div className='gallery-subtitle'>con ripieno di noce tostate, spinaci, ricotta fresa e salsa di pomodori</div>
<NavLink className="link4" to="/gallery">Show more</NavLink>
   </Fade> </div>
       </div>
    </Parallax>
    </div>
       </div>       </div>
    <div className='container-fluid bottom'>
  <div className="row ">
   
      
     <div className="col-md-4 offset-md-2">
                  <p className="small padding-top">
                      { this.props.t('services.text3')}
                
</p>
</div>
    
       <div className="col-md-3 offset-md-1 offset-2 col-8">
        <Reveal effect="fadeInUp"> <img src={h16} alt='catering di arabella'/></Reveal>

    
</div>
    </div> </div> 
    
     <div className='container-fluid bottom'>
  <div className="row ">
     <div className="col-md-7 ">
     <img src={s11} alt='catering di arabella'/>
</div>
         <div className="col-md-4">

  <div className="midd"> <p className=''>{ this.props.t('services.text4')}
 </p>  </div>
    
    <p className='extra'>{this.props.t('services.text5')}</p>
</div>
            
    
    <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 padding-top140">
<div className='seal'> <Reveal effect="fadeInUp">
<img src={seal} alt='catering di arabella'/></Reveal></div>
   <ul className='list1'>
  <h2>Quality Services & Quality Guarantee:</h2>
    <li><span>{this.props.t('services.text6')}
  </span></li>

<li><span>{this.props.t('services.text7')}
  </span></li>
<li><span>{this.props.t('services.text8')}
  </span></li></ul>
   
  </div>

 <div className="col-md-2 offset-md-2 col-10 offset-1">
 <Reveal effect="fadeInUp">
    
    <Zoom />
    
     <ImageZoom
        image={{
          src: {cat},
          alt: 'Catering di Arabella',
          className: '',
          style: { width: '' }
        }}
        zoomImage={{
          src: {cat},
          alt: 'Catering di Arabella'
        }}
      />
    
  </Reveal></div>
</div>
    </div> </div>

    
    
    
    
    
    
    </div>  
)}};

export default translate("common")(Services);

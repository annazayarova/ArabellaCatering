import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import ImageZoom from 'react-medium-image-zoom';
import {NavLink} from 'react-router-dom';

import Zoom from './Zoom';
import { Parallax } from 'react-parallax';

import f7 from '../img/gallery/food/f7.jpg';
import ScrollToTopOnMount from './ScrollToTopOnMount';

import Textabout from './Textabout';
   import { translate, Trans } from 'react-i18next';

  
class About extends React.Component {
   render() {
       
       const { t, i18n } = this.props;
      return (

  <div className="main-content about">
              <ScrollToTopOnMount/>

 <Reveal effect="width">
<div className="bg-white"></div>
        </Reveal>
<Textabout />
    
        
    
  <div className='next'>  <div className='container-fluid bottom'>
  <div className="row">
    <div className="col-md-7 offset-md-1 ">
      <div className="fix">
     <Fade cascade bottom delay={100}> 
            <p>{ this.props.t('about.text1a')}
    
    </p>
  <p>{ this.props.t('about.text1b') }</p>
   <p>{ this.props.t('about.text1c') }</p>
   <p>{ this.props.t('about.text1d') }</p>

   

    </Fade>
    </div></div>
    
    
   
    
     <div className="col-md-2 offset-md-0 col-10 offset-1 bottom1 ">
<Zoom />
            
             <Fade bottom delay={200}>   

    <ImageZoom
        image={{
          src: '../img/s12th.jpg',
          alt: 'Catering di Arabella',
          className: '',
          style: { width: '' }
        }}
        zoomImage={{
          src: '../img/s12.jpg',
          alt: 'Catering di Arabella'
        }}
      />
    

   </Fade>

 </div>
    
    
      
    
    
    <div className="col-md-5 offset-md-1">

 <Fade bottom delay={300}> 
 <img src={f7} alt='catering di arabella'/>
    
     </Fade>
 </div>
     <div className="col-md-4 offset-md-1  padding-top">
     
    <Fade bottom delay={200}>    
<p className='extra'>{this.props.t('about.text2')}</p></Fade>
    
    </div></div></div>
    <div className='container-fluid bottom'>
  <div className="row">
    <div className="col-md-12 ">

<Parallax
    
      bgImage={require('../img/home/h27.jpg')}
      bgImageAlt="catering di arabella"
      strength={200}
    >
      <div style={{ height: '700px' }}>
          <div className='gallery gallery1'>
                <Fade left cascade>
                <div className='gallery-title'>TORRE DI GELATO</div>

<div className='gallery-subtitle'>al cocco, con scaglie di cocco e fiori eduli</div>
<NavLink className="link4" to="/gallery">Show more</NavLink>
   </Fade> </div></div>
    </Parallax>
    

 </div>
    
    
</div></div>
  
   
    <div className='container-fluid pos-top'>
  <div className="row ">
   
        <div className="col-md-2 offset-md-7 offset-2 col-8">
 <Reveal effect="fadeInUp"> 
   <Zoom />
    <ImageZoom
        image={{
          src: '../img/cateringdiarabella_1.jpg',
          alt: 'Catering di Arabella',
          className: '',
          style: { width: '' }
        }}
        zoomImage={{
          src: '../img/cateringdiarabella_1.jpg',
          alt: 'Catering di Arabella'
        }}
      />
    
  </Reveal>
</div>
    </div></div>
      <div className='container-fluid neg-top '>
  <div className="row ">
     <div className="col-md-8 offset-md-2  bottom bg-grey">
           <div className='sobre'>
    <p className="txt-sobre"><span>Arabela Della Casa</span>
    {this.props.t('about.text3a')}</p>
    <p className='txt-sobre'>{this.props.t('about.text3b')}</p>
    <p className='txt-sobre'>{this.props.t('about.text3c')}</p>
    

    </div>
    

 </div>
    
     
    </div> </div>
      <div className='container-fluid bottom'>
  <div className="row ">
     <div className="col-md-4 offset-md-6">
    
     <p className="txt-sobre"><span>Cinzia Perni</span>,  {this.props.t('about.text4')}</p>
</div>

         
     
</div>
    </div>
  </div>  </div>
);}}

export default translate("common")(About);

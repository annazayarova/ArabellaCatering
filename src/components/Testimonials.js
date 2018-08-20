import React from 'react';
import Fade from 'react-reveal/Fade';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import Texttestem from './Texttestem'

   import { translate, Trans } from 'react-i18next';

class Testimonials extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1,  company:"SecuSuisse AG",
    blockq:"Für den Einweihungsevent unserer neuen Zweigniederlassung hat uns Arabella das Catering übernommen. Alle unsere Gäste und Mitarbeiter waren begeistert von der optischen Präsentation wie auch der Qualität des der Speisen und Getränke. Ein grosses Lob an Arabella, es war einfach grosse Klasse – Danke",
    name:"Georg Ulmschneider",
    post:'CEO',},
        {id: 2, company:"Immoidea SA, Lugano",
    blockq:"Durante l'evento per la presentazione della SecuSuisse ho avuto la fortuna di conoscerti, capire come lavori e soprattutto assaporare le tue  buonissime pietanze. Trovo il tuo operato abbia un tocco originale con un catering  molto curato e ben presentato, degli stuzzichini freschi ed ottimi a livello di gusto. Un ottimo lavoro, brava! Non appena avrò occasione di organizzare un party non mancherò di chiamarvi!",
    name:"Fabia Giambonini",
    post:'CEO',},
        {id: 3, company:"Fondazione Extrafid ART, Lugano",
    blockq:"All’occhio la delicatezza e l’eleganza del catering di Arabela sono sorprendenti e intriganti. Al naso ci sono spezie e profumi che caricano il palato di aspettative. In bocca sono un’esplosione di sapori raffinati e decisi che confermano pienamente l’attesa. Nulla è banale, tutto e curatissimo. Complimenti!",
    name:"Fabrizio Ballabio",
    post:"Presidente",},
        {id: 4, company:"M.C.Comunicações",
    blockq:"Muito feliz com essa novidade! Muito sucesso na Suica como sempre foi no Brasil. Só lamento você não mais voltar para nos deliciar com seu trabalho. Você e insubstituível!",
    name:"Maria do Carmo Calmon",
    post:"CEO",},

      ],
    };
  }
 render() {
      

     
        return (
  <div className="main-content">

                      <ScrollToTopOnMount />


    <Texttestem />


        <div className="pages ">
   <div className='container-fluid bottom'>
  <div className="row">
      <div className="col-md-4 offset-md-1">
    <div className="huge">
   
    <p className=""> <Fade bottom cascade>{ this.props.t('testim.text1a')}</Fade></p>  
            <p className=" pleft"><Fade bottom cascade>{ this.props.t('testim.text1b')}</Fade></p>  
            <p className=""><Fade bottom cascade>{ this.props.t('testim.text1c')}</Fade></p>
    
</div>
    


  </div>
    
      
    <div className="col-md-5">
  {this.state.items.map( item =>
                       
<div key={item.id} className="bq">
          <Fade bottom cascade >        


</Fade>
            
        
<div className="blockquote">
       <Fade delay={100}><p>{item.blockq}</p></Fade>

  <Fade cascade delay={200}> <div className='foot'>
    <h1>{item.name}, <span>{item.post}</span></h1> 
<div className="company">{item.company}</div> 

</div>
            </Fade>   
</div>
            
       
</div> 
   )}  
 
            
            
        
    
  
     
     
     </div>
    
    </div></div></div>
    
    
  </div>
)}};
export default translate("common")(Testimonials);


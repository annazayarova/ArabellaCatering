import React from 'react';
import Swiper from 'react-id-swiper';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import Reveal from 'react-reveal/Reveal';

import h7 from '../img/home/h7.jpg';

import h25 from '../img/home/h25.jpg';
import h27 from '../img/home/h27.jpg';
import h6 from '../img/home/h6.jpg';

import h15 from '../img/home/h15.jpg';
import f9 from '../img/gallery/food/f9.jpg';
import f4 from '../img/gallery/food/f4.jpg';



class Gallery extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      items: [
              {id: 3,  
         img:h25,
            title:'CANNELLONI IN VERTICALE',
            subtitle:'con ripieno di noce tostate, spinaci, ricotta fresa e salsa di pomodori'
    },
            
             
          
             {id: 2,  
         img:h6,
           title:'CAKE SALAD',
            subtitle:'con red rice, barbabietole, carote e germoglie'
    },
       
       
        {id: 4,  
         img:h27,
         title:'TORRE DI GELATO',
            subtitle:'al cocco, con scaglie di cocco e fiori eduli'
    },
       
       
           {id: 5,  
         img:h15,
            title:'INSALATA TROPICALE',
            subtitle:'con diversi foglie e fruta tropicale'
    },
        
       
          {id: 6,  
         img:h7,
            title:'SANDWICH CAKE',
            subtitle:'con tonno, senape e verdure di stagion'
    },
          {id: 7,  
         img:f4,
           title:'CIPOLLE IMPERIALI',
            subtitle:'con cipolle di Tropea ripiena di baccala alla veneziana'
    },
        {id: 1,  
         img:f9,
           title:'ESPLOSIONI DI SAPORI',
            subtitle:'con mango, quacamole e riso rosso'
    },
             
       
      ]
    };
  }
    
  render() {       
        const params = {
           mousewheel: false,
    speed:1000,
      spaceBetween: 0,
      centeredSlides: true,  
     autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },   
loop:true,pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },effect:'fade'
        
    }


  
  return (          

          <div className="main-content">
     
      <ScrollToTopOnMount/>

    

                    <Reveal effect="width">
<div className="bg-white"></div>
        </Reveal>

     <div className='slider'>  

      
 <Swiper {...params}>            
  {this.state.items.map( item =>
 <div key={item.id} style={{ backgroundImage: `url(${item.img})`, backgroundColor:'white', backgroundSize: 'cover', backgroundPosition:'top center'  }} > <div className="gallery">
<div className='gallery-title'>{item.title}</div>

<div className='gallery-subtitle'>{item.subtitle}</div>

</div></div>)}
</Swiper>
 </div></div>
  );
}
}


 

export default Gallery;
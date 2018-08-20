import React from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import Textevents from './Textevents';


import Fade from 'react-reveal/Fade';


import Instafeed from 'react-instafeed';


class Events extends React.Component {
 
    

render() {       
       
const instafeedTarget = 'instafeed'
const template = `<div class="col-insta"><div class="insta-post"><a href='{{link}}' target='_blank' class='instafeed__item'><div class=" fixheight" style="background:url({{image}}) center; background-size:cover;-webkit-background-size:cover"></div>
 </a></div></div>`
  
  return (          

          <div className="main-content ">
         <ScrollToTopOnMount/>       
      <Textevents/>


 <div className="feed">
     <Fade right cascade ><a className='follow' href='http://instagram.com/cateringdiarabella' target='_blank'>Follow us</a> 
      
      <a className='instagram' href='http://instagram.com/cateringdiarabella' target='_blank'>
      <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
						</svg></a></Fade>
      
      
      

      
         
<div className='insta-bg'>
      

      <div className="col-insta">
      <div className="insta-post">
            <Fade delay="100"> <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div></Fade>
      </div>
 </div>
      <div className="col-insta">
      <div className="insta-post">
      <Fade delay="200"> <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
      <Fade delay="300"> <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
      <Fade delay="400"> <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
     <Fade delay="500">  <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
     <Fade delay="600">  <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
      <Fade delay="700"> <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
       <div className="col-insta">
      <div className="insta-post">
     <Fade delay="800">  <div className=" fixheight" style={{background:'rgba(48,58,78,.2)'}}></div>
      </Fade></div>
 </div>
  
</div>   
      
    <div className='insta'> 

      <div id={instafeedTarget}  >
      <Instafeed
        get= 'user'
      limit="50"
        ref='instafeed'
        resolution='standard_resolution'
     sortBy='most-recent'
        target={instafeedTarget}
    
        template={template}
      
clientID="a8f4d7c2b079410898119bb6b805ecb6"
        userId='8289167578'
        accessToken='8289167578.a8f4d7c.fb34306193fc4444a1d6df3061957726'
      /> </div> </div>
   
 
      
      

      </div>
 </div>
  );
}
}


 

export default Events;
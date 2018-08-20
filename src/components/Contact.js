import React from 'react';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import Fade from 'react-reveal/Fade';

   import { translate, Trans } from 'react-i18next';

import Textcontact from './Textcontact';

import axios from 'axios';



  
class Contact extends React.Component {
    
   
    
    render() {
       
       const { t, i18n } = this.props;
      return (
  <div className="main-content">

         
          <ScrollToTopOnMount />

 <Textcontact />
    
    
    
        <div className="contact ">
   <div className='container-fluid bottom'>
  <div className="row">
      <div className="col-md-4 offset-md-1">
    <div className="huge">
   
    <p className=""> <Fade bottom cascade>{ this.props.t('cont.text1a')}</Fade></p>  
            <p ><Fade bottom cascade>{ this.props.t('cont.text1b')}</Fade></p>  
            <p className=""><Fade bottom cascade>{ this.props.t('cont.text1c')}</Fade></p>
    
</div>
</div>
                
   <div className="col-md-5 offset-md-1">
   <Fade delay={400} >
               
<h5 className="cont">{ this.props.t('cont.text2')}</h5>
    </Fade>
     <Fade delay={400} cascade>        
            <form id="contact-form" >
    <div className='container-fluid'>
<div className="row">
      <div className="col-md-6">
       <div className="form-group ">
        <label for="date">{ this.props.t('cont.form1')}</label>
        <input type="text" className="form-control" name="date" onChange={this.handleChange} />
    </div>
     </div>
                   <div className="col-md-6">
         <div className="form-group ">
        <label for="hour">{ this.props.t('cont.form2')}</label>
        <input type="text" className="form-control" name="hour"  onChange={this.handleChange} />
    </div>    </div>
        
           <div className="col-md-6">
         <div className="form-group">
        <label for="name">{ this.props.t('cont.form3')}</label>
        <input type="text" className="form-control" name="name"  onChange={this.handleChange} />
    </div>   </div>
        <div className="col-md-6">
         <div className="form-group">
        <label for="tel">{ this.props.t('cont.form4')}</label>
        <input type="text" className="form-control" name="tel"  onChange={this.handleChange} />
    </div>  </div>
        
                   <div className="col-md-12">
         <div className="form-group">
        <label for="email">{ this.props.t('cont.form5')}</label>
        <input type="email" className="form-control" name="email"   onChange={this.handleChange} />
    </div>    </div>
         <div className="col-md-12 ">
        <div className="form-group">
        <label for="type">{ this.props.t('cont.form6')}</label>
        <input type="text" className="form-control" name="type"  onChange={this.handleChange} />
    </div>    </div>
           
                <div className="col-md-6">
        
         <div className="form-group">
        <label for="number">{ this.props.t('cont.form7')}</label>
        <input type="text" className="form-control" name="number"  onChange={this.handleChange} />
    </div></div>
                        <div className="col-md-6">
         <div className="form-group">
        <label for="budget">{ this.props.t('cont.form8')}</label>
        <input type="text" className="form-control" name="budget"  onChange={this.handleChange} />
    </div>    </div>
        
                      <div className="col-md-12">
          <div className="form-group">
        <label for="city">{ this.props.t('cont.form9')}</label>
        <input type="text" className="form-control" name="city"  onChange={this.handleChange} />
    </div></div>
        
        
        
                         <div className="col-md-12">
    <div className="form-group">
        <label for="message">{ this.props.t('cont.form10')}</label>
        <textarea className="form-control" rows="5" name="message"  onChange={this.handleChange}></textarea>
    </div>    </div></div></div>
    
    <button type="submit" className="send">Send</button>
</form>
     </Fade>
    
</div>              
                
                </div>
 </div>
</div></div>
    
  
    
    
       
)}} 

export default translate("common")(Contact);

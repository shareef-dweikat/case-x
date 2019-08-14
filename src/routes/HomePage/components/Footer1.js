import * as React from "react";
import './footer.css'
class Footer1 extends React.Component{
 

   render() {
    return (
    <div style={{padding:"50px 100px 0px 100px",marginTop:50,backgroundColor:"white"}}>
        <span style={{fontSize:22}}>
          Contact Our Support Team
        </span>
        <span style={{marginLeft:16}}>Sun-Fri 11am -5pm, Sat 1pm - 3pm (GMT)</span>
        <span style={{float:"right",borderWidth:1,borderStyle:"solid"}}>+1 302 3946092</span>
        <div style={{marginTop:32,marginBottom:50}}>
            <span className="footer-menu">HOME</span>
            <span className="footer-menu">ABOUT</span>
            <span className="footer-menu">CONTACT</span>
            <span className="footer-menu">SUPPORT</span>
            <span className="footer-menu">BUSINESS</span>
            <span className="footer-menu">HELP</span>
        </div>
        <div style={{float:"right",margin:"30px 100px 30px 0px"}}>
            <i className="fa fa-facebook-square icon" style={{fontSize:'25px',marginRight:8}}></i> 
            <i className="fa fa-twitter-square icon" style={{fontSize:'25px',marginRight:8}}></i> 
            <i className="fa fa-instagram icon" style={{fontSize:'25px',marginRight:8}}></i> 

        </div>
        <div style={{marginLeft:50,marginBottom:40,paddingTop:100}}>
            <span className="footer-menu2" style={{width:"30%"}}>Copyright © 2019 Case X Industries Ltd</span>
            <span className="footer-menu2">Privacy Policy</span>
            <span className="footer-menu2">Terms OF Sale</span>
            <span className="footer-menu2">Rest OF The World<i className="fa fa-globe icon" style={{fontSize:'20px',marginLeft:8}}></i> </span>
         
        </div>
    </div>

    );
  }
}

export default Footer1;

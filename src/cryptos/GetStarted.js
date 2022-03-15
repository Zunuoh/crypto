import React from "react";
// import { Link } from "react-router-dom";
import "../styles/styles2.css";
import flame from '../pictures/flame-827.png'



const GetStarted = () => {
    
  return (
    <div>
    <div className="mainContainer">CRYBSE</div>
     <div className="mainContainer2">
      <div>
      <div className="textContainer" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>Our best users are all over the world with wide coverage</div>
     <div className="txtContain" style={{fontFamily:"Hind Madurai", opacity:0.8}}>Our platform reaches people all over the world, hereby we are trusted as the best platform for crypto trading</div>
     <div style={{flexDirection:"row", display:"flex", justifyContent:"space-between", marginTop:50}}>
       <div className="footer2">
         <div style={{fontSize:40, fontFamily:"Hind Madurai"}}>20M+</div>
         <div style={{maxWidth:100, lineHeight:"1.5", fontFamily:"Hind Madurai"}}>People who have trained</div>
       </div>
       <div>
       <div style={{fontSize:40, fontFamily:"Hind Madurai"}}>100M+</div>
         <div style={{maxWidth:120, lineHeight:"1.5", fontFamily:"Hind Madurai"}}>Famous people paying</div>
       </div>
       <div>
       <div style={{fontSize:40, fontFamily:"Hind Madurai"}}>50</div>
         <div style={{maxWidth:100, lineHeight:"1.5", fontFamily:"Hind Madurai"}}>Based on big companies</div>
       </div>
     </div>
      </div>
    




     <div className="imgContainer">
       <img src={flame} alt="" className="imgWrap"/>
     </div>
     </div>
    

     
    </div>
  );
};

export default GetStarted;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import crypto from '../pictures/crypto.png'
const footerOne = [{id:"0", name:"BINANCE"}, {id:"1", name:"CoinMarketCap"}, {id:2, name:"BLOCKCHAIN"}]
const footerTwo = [{id:"0", name:"coinbase"}, {id:"1", name:"ECNCAPITAL"}, {id:2, name:"Principal"}]

const HomePage = () => {
    const [firstFooters] = useState(footerOne);
    const [secondFooters] = useState(footerTwo);
  return (
    <div>
      <div className="flexWrapper">
        <div className="mainContainer">CRYBSE</div>
        <div className="linkWrapper">
          <Link
            to="/contact"
            className="links"
            activeStyle={{
            fontWeight: "bold",
            color: "#ff0000"
            }}
          >
            Contact
          </Link>
          <Link to="/dashboard" className="links">
           Dashboard
          </Link>
          <Link to="/home" className="links">
            Community
          </Link>
          <Link to="/home" className="links">
            Wallets
          </Link>
          <Link to="/home" className="links">
            ENG
          </Link>
        </div>
      </div>

      <div className="centerWrap">
          <div className="h2Wrap">
              <h2 className="h2Text" style={{fontFamily:"Montserrat"}}>The best trading cryptocurrency assets</h2>
              <div style={{lineHeight:1.5, fontSize:20, fontFamily:"Hind Madurai"}}>Start messaging now on cyptoApp you can learn to buy and sell cryptocurrency assets with the best quality and ease</div>
              <Link to="/getstarted">
              <div style={{marginTop:30, backgroundColor:"#E25132", borderWidth:1, width:170, justifyContent:"center", alignItems:"center", display:"flex", height:50, borderRadius:30, color:"white", fontSize:18, fontFamily:"Hind Madurai"}}>
                Let's Get Started
            </div>
            </Link>
            <div className="footer">
              { firstFooters && firstFooters.map(firstFooter=>{
                  return(
                     <div className="footer" style={{fontFamily:"Hind Madurai", fontWeight:"600", fontStyle:"normal"}}>
                           {firstFooter.name}
                     </div>
                  )   
              })}
            </div>
            <div className="secondFooter">
              { secondFooters && secondFooters.map(secondFooter=>{
                  return(
                     <div className="secondFooter" style={{fontFamily:"Hind Madurai", fontWeight:"600", fontStyle:"normal"}}>
                           {secondFooter.name}
                     </div>
                  )   
              })}
            </div>
          </div>
          <div>
           <img src = {crypto} className="imageWrap" alt=""/>
          </div>
      </div>

     
    </div>
  );
};

export default HomePage;

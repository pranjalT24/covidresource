import React from 'react';
import "./css/Home.css";
import Slide from 'react-reveal/Slide';
import Typed from 'react-typed';
import img1 from './img/SVG2.svg';
import img3 from './img/SVG5.svg';
import img2 from './img/svg44.svg';
import img4 from './img/IMGSVG1.svg';

function Home() {
    return (
       <>
      <div className="container d-flex justify-content-center cont-main">
                <div className="container dash-cont mt-3 p-5">
                <div>
                    <h1 className="mb-1" style={{color:"white"}}>CG-HELP</h1>
                    <h4 className="mb-5 text-white">Welcome to Donate</h4>    
            </div>
            </div>
            </div>
       <Slide left cascade>
       <div className="container main-container2 mt-3">
           <div className="row">
           <div className="col-lg-6 col-md-6  d-flex justify-content-center align-items-center ">
                   <p>
                   <p className="main-text1"><Typed
                    strings={['#IndiaFightsCorona','#IndiaFightsCorona']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /></p>
                    <p className="main-context">As the second wave of the Covid-19 pandemic continues to rage through India, several patients are struggling to find beds, oxygen and drugs. In such a time, We are giving our contribution to our people to fight with corona.</p>
                   </p>
               </div>
           <div className="col-lg-6 col-md-6 img-colm">
                   <img src={img1} alt="" className="img-fluid" />
               </div>
           </div>
       </div>
       </Slide>
       <Slide right cascade>
       <div className="container main-container2">
       <div className="row">
       <div className="col-lg-6 col-md-6  d-flex justify-content-center align-items-center pt-5">
                   <p>
                   <p className="main-text1"> We Are Together </p>
                    <p className="main-context">We are helping our helping our donation by donating Oxygen Cylinder, Plasma, Blood for those who are in urgent require of this.</p>
                    <p className="main-context">This website act as a medium between the giver (one who want to donate any of the resource) and Taker (who need this resource for their friend and family).</p>
                   </p>
               </div>
           <div className="col-lg-6 col-md-6 text-center container-two">
               <img src={img2} alt="" className="img-fluid" />
           </div>
           </div>
       </div>
       </Slide>
       <Slide left cascade>
       <div className="container main-container2">
       <div className="row">
       <div className="col-lg-6 col-md-6  d-flex justify-content-center align-items-center pt-5">
                   <p>
                   <p className="main-text1">Blood Plasma Oxygen </p>
                    <p className="main-context">In our resource section you will find the availability of Blood .</p>
                    <p className="main-context">This website act as a medium between the giver (one who want to donate any of the resource) and Taker (who need this resource for their friend and family).</p>
                   </p>
               </div>
           <div className="col-lg-6 col-md-6 text-center container-two">
               <img src={img3} alt="" className="img-fluid" />
           </div>
           </div>
       </div>
       </Slide>
    
       </>
    );
}

export default Home;
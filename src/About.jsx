import React from 'react';
import img2 from './img/about.svg';
import pimg from './img/pranjal.svg';
import jimg from './img/jai.svg';

function About(props) {
    return (
        <>
          <div className="container d-flex justify-content-center cont-main">
                <div className="container dash-cont mt-3 p-5">
                <div>
                    <h1 className="mb-1" style={{color:"white"}}>Hello... People</h1>
                    <h4 className="mb-5 text-white">Do You Want To know About Us</h4>    
            </div>
            </div>
            </div>
    
           <div className="container main-container2">
       <div className="row">
       <div className="col-lg-6 col-md-6 text-center container-two">
               <img src={img2} alt="" className="img-fluid" />
           </div>
       <div className="col-lg-6 col-md-6  d-flex justify-content-center align-items-center pt-5">
                   <p>
                   <p className="main-text1"> We are No Body </p>
                    <p className="main-context">We are helping our helping our donation by donating Oxygen Cylinder, Plasma, Blood for those who are in urgent require of this.</p>
                    <p className="main-context">This website act as a medium between the giver (one who want to donate any of the resource) and Taker (who need this resource for their friend and family).</p>
                   </p>
               </div>
           </div>
       </div>
    
           <div className="container main-container2">
           <div className="container text-center">
           <hr />
           <h1>Our Team</h1>
           <hr />
           </div>
         
       <div className="row">
       <div class="col-lg-6 col-md-6 mb-lg-0 mb-5 text-center">
      <div class="avatar mx-auto">
        <img src={pimg} class="rounded-circle z-depth-1"
          alt="Sample avatar" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Pranjal Tiwari</h5>
      <p class="text-uppercase blue-text"><strong>Web Designer</strong></p>
      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
      
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
       <div class="col-lg-6 col-md-6 mb-lg-0 mb-5 text-center">
      <div class="avatar mx-auto">
        <img src={jimg} class="rounded-circle z-depth-1"
          alt="Sample avatar" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Vaibhav Soni</h5>
      <p class="text-uppercase blue-text"><strong>Web Designer</strong></p>
      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
      
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
       </div>
       </div>
        </>
    );
}

export default About;
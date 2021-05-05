import React from 'react';
import { NavLink,useHistory } from "react-router-dom";
import { auth } from './firebase/firebase';
import "./css/Nav.css"

const Navbar = ({user})=> {
    const history=useHistory();

  //   document.getElementById("ticon").addEventListener("click", function (e) {
  //     var target = e.target;
  
  //     target.classList.toggle("&#xf0c9;");
  //     target.classList.toggle("&#xf00d;");
  // }, false);
  
    
    

    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 
  <span style={{fontsize:"24px"}} className='fas' id="ticon">&#xf0c9;</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      {
        user?
        <>
        <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
        <button className="btn btn-success my-2 my-sm-0" onClick={
          ()=>{auth().signOut()
            history.push("/login")
          }
        }>LogOut</button>
        </>
        :
        <>
        <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
        </>
      }
    
     
    </ul>
    
  </div>
</nav> 
        </>
    );
};

export default Navbar;
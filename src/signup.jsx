import React,{useState} from 'react';
import "./css/signup.css";
import { NavLink,useHistory } from "react-router-dom";
import {auth,db} from "./firebase/firebase.js";


const Signup = () => {

  const userDetail={
    name:"",
    address:"",
    email:"",
  }
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    

    const [detail, setdetail] = useState(userDetail)
    
    const history =useHistory();

    const handleChange= async e=>{
     
      e.preventDefault();
        try {
            const result= await auth().createUserWithEmailAndPassword(email, password);
            db.collection("user").doc(result.user.uid).set(
              detail
            )
    
            history.push("/login");
        } catch (error) {
            console.log(error.message);
        } 
    }

    const valChg=e=>{
      var {name,value}=e.target;
      if (name=="email") {
        setemail(value)
      }
      setdetail({
        ...detail,
        [name]:value
      })
    }
    
    return (
        <>
      <div className="container container-signup d-flex justify-content-center my-5">
    <div className="d-flex flex-column justify-content-between">
        <div className="card mt-3 p-5">
            <div>
                <p className="mb-1">Registration Pannel</p>
                <h4 className="mb-5 text-white">Thank You For Donating To Our People</h4>
            </div> <NavLink to="/login"> <button className="btn btn-primary btn-lg"><small>Already signed up?</small><span>&nbsp;Log in</span> </button></NavLink>
        </div>
        <div className="card two bg-white px-5 py-4 mb-3">
        <form onSubmit={e=>handleChange(e)}>
            
            <div className="form-group"><input type="text" className="form-control" id="name" name="name" value={detail.name} onChange={valChg} required /><label className="form-control-placeholder" htmlFor="name">Full Name</label></div>
            <div className="form-group"><input type="text" className="form-control" id="address" name="address" value={detail.address} onChange={valChg} required /><label className="form-control-placeholder" htmlFor="address"> Address</label></div>
            <div className="form-group"><input type="email" className="form-control" id="email" name="email"  value={detail.email} onChange={valChg} required /><label className="form-control-placeholder" htmlFor="mail">Email</label></div>
            <div className="form-group"><input type="password" className="form-control" id="password" value={password} onChange={e=>setpassword(e.target.value)} required /><label className="form-control-placeholder" htmlFor="password">Password</label></div> <button type="submit" className="btn btn-primary btn-block btn-lg mt-1 mb-2"><span>SignUp<i className="fas fa-long-arrow-alt-right ml-2"></i></span></button>
            </form>
        </div>
    </div>
</div>
        </>
    );
};

export default Signup;
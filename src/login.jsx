import React,{useState} from 'react';
import "./css/signup.css";
import { NavLink,useHistory } from "react-router-dom";
import {auth} from "./firebase/firebase.js";

const Login = () => {

     const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history =useHistory();
    const handleCh=async (e)=>{
      
        e.preventDefault();
        try {
            await auth().signInWithEmailAndPassword(email, password);
            history.push("/dashboard");
        } catch (error) {
            console.log(error.message);
        }
        setemail("");
        setpassword("");
        
    }

    return (
        <>
     <div className="container container-signup d-flex justify-content-center my-5">
    <div className="d-flex flex-column justify-content-between">
        <div className="card mt-3 p-5">
            <div>
                <p className="mb-1">Login Pannel</p>
                <h4 className="mb-5 text-white">Thank You For Helping</h4>
            </div> <NavLink to="/signup"><button className="btn btn-primary btn-lg"><small>Do not have account?</small><span>&nbsp;Sign Up</span> </button></NavLink> 
        </div>
        <div className="card two bg-white px-5 py-4 mb-3">
        <form onSubmit={e=>handleCh(e)}>
            <div className="form-group"><input type="email" className="form-control" id="mail" value={email} onChange={e=>setemail(e.target.value)}  required /><label className="form-control-placeholder" htmlFor="mail">Email</label></div>
          
            <div className="form-group"><input type="password" className="form-control" id="password" value={password} onChange={e=>setpassword(e.target.value)}  required /><label className="form-control-placeholder" htmlFor="password">Password</label></div> <button type="submit" className="btn btn-primary btn-block btn-lg mt-1 mb-2"><span>LogIn<i className="fas fa-long-arrow-alt-right ml-2"></i></span></button>
            </form>
        </div>
    </div>
</div>
        </>
    );
};

export default Login;
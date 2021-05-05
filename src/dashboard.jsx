import React from 'react';
import { useHistory } from "react-router-dom";

const Dashboard=({user})=>{
    const history=useHistory();

        return (
            <div>
            {
        
            user?
            <>
            <div className="container d-flex justify-content-center">
                <div className="container dash-cont mt-3 p-5">
                <div>
                    <p className="mb-1">DashBoard</p>
                    <h4 className="mb-5 text-white">Thank You For Helping</h4>
            </div>
            </div>
                
            </div>
            </>
            :
            history.push("/login")   
        } 
        </div> 
        ); 
  
      return 

}

export default Dashboard;
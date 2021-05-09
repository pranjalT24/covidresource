import React from 'react';
import { useHistory } from "react-router-dom";

const Dashboard=()=>{
  

        return (
            <>
            <div className="container d-flex justify-content-center cont-main">
                <div className="container dash-cont mt-3 p-5">
                <div>
                    <p className="mb-1">DashBoard</p>
                    <h4 className="mb-5 text-white">Thank You For Helping</h4>
                    <p className="mb-1">Pranjal Tiwari</p>
                    <h5 className="text-white">Sattipara</h5>
                    <h5 className="mb-3 text-white">UserID</h5>
            </div>
            </div>
            </div>
            <div className="container ">
  
                <div className="container dash-cont3 cont-2x mt-3 p-5">
                <form >
                <div className="form-group">
    <label htmlFor="exampleInputPassword1" style={{color:"white"}}>Your Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="You Contact Please" />
  </div>
                <div className="form-group">
                     
    <label htmlFor="exampleInputPassword2" style={{color:"white"}}>Resource</label>
    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Resource You Want To Share" />
    <small id="emailHelp" className="form-text text-white">Please Write Below Resources In Resource Box</small>
                <small id="emailHelp" className="form-text text-white">1. Plasma</small>       
                <small id="emailHelp" className="form-text text-white">2. Oxygen</small>       
                <small id="emailHelp" className="form-text text-white">3. Blood : A+/A-,B+/B-,O+/O-,AB+/AB-</small> 
  </div>
  <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
                </div>
            

<table class="table table-sm table-sticky-header my-4">
  <thead class="thead-dark">
    <tr>
    <th scope="col">Resource</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody className="bg-light">
    <tr>
    <td>Resource</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
           
     
       
            </>
        ); 
  
      return 

}

export default Dashboard;
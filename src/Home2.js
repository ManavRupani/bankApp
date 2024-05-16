import React from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 customBackground">
          <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua3xlbnwwfHwwfHx8MA%3D%3D" className="d-block mx-lg-auto img-fluid img-over" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to Bank TD App</h1> 
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
            <Link to="/deposit" className="btn btn-over btn-lg px-4 me-md-2">
              Deposit
            </Link>
            <Link to="/withdraw" className="btn btn-over btn-outline-secondary btn-lg px-4">
              Withdraw
            </Link>
            <Link to="/home/key/records" className="btn btn-over btn-outline-secondary btn-lg px-4">
              Record
            </Link>
          </div>
        </div>
      </div>
    
         
    </div>
    
  
  );
};

export default Home2;

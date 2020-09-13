import React from "react";
import { connect } from "react-redux";
// import Header from "../shared/Header";
import Login from "./Login";
// import Footer from '../shared/Footer';

export const SignIn = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="w3layouts-main">  
        <div className="bg-layer">
          {/* <Header /> */}
          <Login />
        </div> 
      </div>
    </React.Fragment>
  );
};

export default connect(null)(SignIn);

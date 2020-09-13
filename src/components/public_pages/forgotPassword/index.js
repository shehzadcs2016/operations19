import React from "react";
import { connect } from "react-redux";
// import Header from "../shared/Header";
import ForgotPwdBody from "./ForgotPwdBody";

export const ForgotPassword = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="w3layouts-main">  
        <div className="bg-layer">
          {/* <Header /> */}
          <ForgotPwdBody />
        </div>
      </div>  
    </React.Fragment>
  );
};

export default connect(null)(ForgotPassword);
